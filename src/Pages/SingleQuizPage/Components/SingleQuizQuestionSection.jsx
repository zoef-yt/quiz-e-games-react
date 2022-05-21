import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import '../SingleQuizPage.css';
import { useQuizQuestion } from '../../../Context';

const SingleQuizQuestionSection = ({ quiz }) => {
	const { totalScore, mcqs } = quiz;
	const { userSelection, addToUserSelection } = useQuizQuestion();
	const scrollBar = useRef();
	const navigate = useNavigate();

	const userSelectionHandler = (id, selectedOption) => {
		addToUserSelection({ questionId: id, selectedOption: selectedOption });
	};

	return (
		<div className='quiz-question-page'>
			<div className='flex-row space-between'>
				<div className='btn btn-outline-secondary'>
					Total Answered: {userSelection.length}/{mcqs.length}
				</div>
				<div className='btn btn-outline-secondary'>Total Points: {totalScore}</div>
			</div>
			<div className='questions-container' ref={scrollBar}>
				{mcqs.map(({ _id, question, options }, index) => {
					return (
						<section id={index} className='questions-section' key={_id}>
							<h3 className='question-title'>
								{index + 1}. {question}
							</h3>

							<ul className='list-group options'>
								{options.map((option, index) => {
									const isSelectedByUser =
										userSelection.findIndex((selected) => {
											return selected.questionId === _id && selected.selectedOption === option;
										}) === -1
											? false
											: true;
									return (
										<li
											key={index}
											onClick={() => {
												userSelectionHandler(_id, option);
											}}
											className={`list-group-item ${isSelectedByUser ? 'user-selected' : ''}`}
										>
											<h3>{option}</h3>
										</li>
									);
								})}
							</ul>
							<div className='questions-cta'>
								<button
									className={`btn ${index != 0 ? 'btn-secondary' : 'btn-disabled'}`}
									onClick={
										index != 0
											? () => {
													scrollBar.current.scrollTop = scrollBar.current.scrollTop - scrollBar.current.clientHeight;
											  }
											: null
									}
								>
									Previous!
								</button>
								{index < mcqs.length - 1 ? (
									<button
										className='btn btn-secondary'
										onClick={() => {
											scrollBar.current.scrollTop = scrollBar.current.scrollTop + scrollBar.current.clientHeight;
										}}
									>
										Next!
									</button>
								) : userSelection.length === mcqs.length ? (
									<button
										className='btn btn-secondary'
										onClick={() => {
											navigate('/all-quizzes/single-quiz-page/result');
										}}
									>
										End Quiz!
									</button>
								) : (
									<button title='Make sure to answer all the questions' className='btn btn-disabled' onClick={() => {}}>
										End Quiz!
									</button>
								)}
							</div>
						</section>
					);
				})}
			</div>
		</div>
	);
};

export { SingleQuizQuestionSection };
