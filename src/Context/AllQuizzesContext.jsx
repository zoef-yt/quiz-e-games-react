import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../CustomHooks/UseAxios.jsx';

const AllQuizzesContext = createContext([]);

const AllQuizzesProvider = ({ children }) => {
	const [quizzes, setQuizzes] = useState([]);

	const { response: quizzesResponse, operation: fetchAllQuizzes, loading: loadingQuizzes } = useAxios();

	useEffect(() => {
		quizzesResponse?.quizes ? setQuizzes(quizzesResponse.quizes) : getQuizzes();
	}, [quizzesResponse]);
	const getQuizzes = () => {
		fetchAllQuizzes({
			method: 'GET',
			url: '/api/quizzes',
		});
	};
	return <AllQuizzesContext.Provider value={{ quizzes, loadingQuizzes }}>{children}</AllQuizzesContext.Provider>;
};

const useAllQuizzes = () => useContext(AllQuizzesContext);

export { useAllQuizzes, AllQuizzesProvider };
