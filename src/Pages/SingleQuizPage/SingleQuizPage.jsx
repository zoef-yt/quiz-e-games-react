import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useModal, useQuizQuestion } from '../../Context';
import './SingleQuizPage.css';
import { SingleQuizQuestionSection } from './Components/SingleQuizQuestionSection.jsx';

const SingleQuizPage = () => {
	const { quizQuestions, loadingQuestions, userSelection } = useQuizQuestion();
	const { openModal } = useModal();
	const navigate = useNavigate();
	useEffect(() => {
		userSelection.length < 1 && quizQuestions && openModal('RulesModal');
	}, [quizQuestions]);
	return (
		<main className='app-main-content'>
			{!loadingQuestions ? (
				quizQuestions ? (
					<SingleQuizQuestionSection quiz={quizQuestions} />
				) : (
					<h1 className='text-align-center'>
						Select a quiz from{' '}
						<span
							onClick={() => {
								navigate('/all-quizzes');
							}}
							className='btn-link'
						>
							quizzes page
						</span>
					</h1>
				)
			) : (
				<h1 className='text-align-center'>loading.....</h1>
			)}
		</main>
	);
};

export { SingleQuizPage };
