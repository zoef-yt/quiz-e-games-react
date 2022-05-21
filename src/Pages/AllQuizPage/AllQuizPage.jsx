import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './AllQuizPage.css';
import { SingleQuizItem } from './Components/SingleQuizItem';
import { useAllQuizzes, useFilter } from '../../Context';

const AllQuizPage = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const { quizzes } = useAllQuizzes();
	const { filterState, filterDispatch } = useFilter();
	useEffect(() => {
		filterState.dataToShow.length === 0 &&
			filterDispatch({
				type: 'SET_DATA',
				payload: quizzes,
			});
	}, [quizzes]);

	const getFilteredData = (state) => {
		const selectedCategoryQuiz = selectedCategory(state.selectedCategory, state.dataToShow);
		return selectedCategoryQuiz;
	};
	const selectedCategory = (selectedCategory, dataToShow) => {
		return selectedCategory === '' || selectedCategory === 'ALL'
			? dataToShow
			: [...dataToShow].filter((quiz) => quiz.categoryName === selectedCategory);
	};

	const filteredDate = getFilteredData(filterState);
	return (
		<main className='homepage-content'>
			<section className='categories-section'>
				<h1
					onClick={() => {
						filterDispatch({
							type: 'CLEAR_ALL',
							payload: quizzes,
						});
					}}
					className='categories-header'
				>
					{' '}
					All-QUIZ{' '}
				</h1>
				<ul className='list-group'>
					{filteredDate &&
						filteredDate.map((quiz) => {
							const { _id, title, totalScore, src, mcqs, categoryName } = quiz;
							return (
								<SingleQuizItem
									key={_id}
									src={src}
									categoryName={categoryName}
									totalPoints={totalScore}
									quizName={title}
									questions={mcqs}
								/>
							);
						})}
				</ul>
			</section>
		</main>
	);
};

export { AllQuizPage };
