import { Link } from 'react-router-dom';
import './RulesPage.css';

const RulesPage = () => {
	return (
		<main className='homepage-content'>
			<section className='rules-section'>
				<h1>Rules to Follow</h1>
				<hr />
				<ul className='list-group'>
					<SingleRule text={'Every quiz has a timer to be completed in.'} />
					<SingleRule text={'You get only 1 chance to attempt per question.'} />
					<SingleRule
						text={
							'All quiz has different marking system. In this quiz, you will be getting 1 point per correct answer for a total of 15 points.'
						}
					/>
				</ul>
				<Link to='all-quizzes/rules/quiz' className='btn btn-primary'>
					START QUIZ!
				</Link>
			</section>
		</main>
	);
};

export { RulesPage };

const SingleRule = ({ text }) => {
	return (
		<li className='list-group-item'>
			<h2>{text}</h2>
		</li>
	);
};
