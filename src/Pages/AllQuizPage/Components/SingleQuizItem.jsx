import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useModal, useQuizQuestion } from '../../../Context';

const SingleQuizItem = ({ id, quizName, categoryName, src, questions }) => {
	const navigate = useNavigate();

	const { openModal } = useModal();
	const { user } = useAuth();
	const { currentQuizHandler } = useQuizQuestion();
	const navigateToQuiz = () => {
		currentQuizHandler(id);
		navigate('/all-quizzes/single-quiz-page');
	};

	return (
		<li className='list-group-item'>
			<div className='card-body card-horizontal'>
				<img className='card-img-sm img-rounded-square' src={src} alt={quizName} />
				<div className='flex-column space-evenly margin-right'>
					<h3>{quizName}</h3>
					<p className='color-positive'>Total questions: {questions.length}.</p>
					<p className='text-grey'>Category: {categoryName}</p>
				</div>
				<div className='flex-column space-around'>
					<div onClick={user ? () => navigateToQuiz() : () => openModal('AuthModal')} className='btn btn-primary'>
						Play!
					</div>
				</div>
			</div>
		</li>
	);
};

export { SingleQuizItem };
