import { Link } from 'react-router-dom';

const SingleQuizItem = ({ quizName, totalPoints, categoryName, src, questions }) => {
	return (
		<li className='list-group-item'>
			<div className='card-body card-horizontal'>
				<img className='card-img-sm img-rounded-square' src={src} alt={quizName} />
				<div className='flex-column space-evenly margin-right'>
					<h3>{quizName}</h3>
					<p>
						<span className='color-positive'>Total points: {totalPoints}</span> ·
						<span className='text-grey'> Total questions: {questions.length}.</span>
					</p>
					<p className='text-grey'>Category: {categoryName}</p>
				</div>
				<div className='flex-column space-around'>
					<Link to='/all-quizzes/rules' className='btn btn-primary'>
						Play!
					</Link>
				</div>
			</div>
		</li>
	);
};

export { SingleQuizItem };
