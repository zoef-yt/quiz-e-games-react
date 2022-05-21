import { useNavigate } from 'react-router-dom';
import { useQuizQuestion } from '../../Context';

const ResultPage = () => {
	const navigate = useNavigate();
	const { quizQuestions, userSelection, loadingQuestions } = useQuizQuestion();
	let totalScore = 0;
	const getUserScore = (mcq, userSelected) => {
		totalScore = mcq.reduce((acc, curr, index) => {
			return curr.answer === userSelected[index].selectedOption ? acc + 1 : acc + 0;
		}, 0);
		return `${totalScore}/${mcq.length}`;
	};
	const getUserSelectedAnswer = (quesId) => {
		return userSelection.find((selection) => selection.questionId === quesId)?.selectedOption;
	};
	return (
		<main className='app-main-content'>
			{!loadingQuestions ? (
				quizQuestions ? (
					<>
						<section className='categories-section'>
							<div className='flex-row space-evenly'>
								<h1 className='categories-header'> Result: {getUserScore(quizQuestions.mcqs, userSelection)} </h1>
							</div>
							{quizQuestions.mcqs.map((mcq) => {
								return (
									<ResultPageQuestionTile
										key={mcq._id}
										question={mcq.question}
										userSelected={getUserSelectedAnswer(mcq._id)}
										correctAnswer={mcq.answer}
									/>
								);
							})}
						</section>
						<div className='flex-row justify-content-center'>
							<button
								className='btn btn-primary'
								onClick={() => {
									navigate('/all-quizzes');
								}}
							>
								Take more Quiz
							</button>
						</div>
					</>
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

export { ResultPage };

const ResultPageQuestionTile = ({ question, userSelected, correctAnswer }) => {
	return (
		<>
			<hr />
			<div className='quiz-question-page'>
				<h3>{question}</h3>
				<ul className='list-group options'>
					{userSelected !== correctAnswer && (
						<li className='list-group-item answer-wrong'>
							<h3>{userSelected}</h3>
						</li>
					)}

					<li className='list-group-item answer-correct'>
						<h3>{correctAnswer}</h3>
					</li>
				</ul>
			</div>
		</>
	);
};
