import MockmanEs from 'mockman-js';
import { Routes, Route } from 'react-router-dom';
import { AllQuizPage, HomePage, PageNotFound, RulesPage } from '../../Pages/index';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/mock-api' element={<MockmanEs />} />
			<Route path='/all-quizzes' element={<AllQuizPage />} />
			<Route path='/all-quizzes/rules' element={<RulesPage />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
