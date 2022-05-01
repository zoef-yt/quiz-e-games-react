import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../CustomHooks/UseAxios.jsx';

const QuizQuestionsContext = createContext([]);

const QuizQuestionsProvider = ({ children }) => {
	const [quizQuestions, setQuizQuestions] = useState(null);
	const [currentQuiz, setCurrentQuiz] = useState(null);
	const [userSelection, setUserSelection] = useState([]);

	const { response: quizQuestionsResponse, operation: fetchAllQuestions, loading: loadingQuestions } = useAxios();

	useEffect(() => {
		quizQuestionsResponse?.quiz ? setQuizQuestions(quizQuestionsResponse.quiz) : null;
	}, [quizQuestionsResponse]);

	useEffect(() => {
		if (currentQuiz) {
			getQuestions(currentQuiz);
		}
	}, [currentQuiz]);

	const getQuestions = (quizId) => {
		fetchAllQuestions({
			method: 'GET',
			url: `/api/quizzes/${quizId}`,
		});
	};

	const currentQuizHandler = (quizId) => {
		setCurrentQuiz(quizId);
	};

	const clearQuestion = () => {
		setQuizQuestions(null);
	};

	const clearCurrentQuizHandler = () => {
		setCurrentQuiz(null);
	};

	const addToUserSelection = (userSelected) => {
		const isAlreadySelected = userSelection.findIndex((selection) => selection.questionId === userSelected.questionId) === -1 ? false : true;
		setUserSelection(
			isAlreadySelected
				? (prev) =>
						prev.map((selected) =>
							selected.questionId === userSelected.questionId ? { ...selected, selectedOption: userSelected.selectedOption } : selected,
						)
				: (prev) => [...prev, userSelected],
		);
	};

	const clearUserSelection = () => {
		setUserSelection([]);
	};
	return (
		<QuizQuestionsContext.Provider
			value={{
				currentQuiz,
				currentQuizHandler,
				clearCurrentQuizHandler,
				clearQuestion,
				quizQuestions,
				loadingQuestions,
				getQuestions,
				userSelection,
				addToUserSelection,
				clearUserSelection,
			}}
		>
			{children}
		</QuizQuestionsContext.Provider>
	);
};

const useQuizQuestion = () => useContext(QuizQuestionsContext);

export { useQuizQuestion, QuizQuestionsProvider };
