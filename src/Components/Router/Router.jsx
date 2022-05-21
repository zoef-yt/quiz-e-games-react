import MockmanEs from 'mockman-js';
import { Routes, Route } from 'react-router-dom';
import { AllQuizPage, HomePage, PageNotFound, ResultPage, SingleQuizPage } from '../../Pages/index';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/mock-api' element={<MockmanEs />} />
			<Route path='/all-quizzes' element={<AllQuizPage />} />
			<Route path='/all-quizzes/single-quiz-page' element={<SingleQuizPage />} />
			<Route path='/all-quizzes/single-quiz-page/result' element={<ResultPage />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
