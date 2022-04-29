import { useCategory } from '../../Context';
import { CategoryCard } from './Components/CategoryCard';
import './Homepage.css';

const HomePage = () => {
	const { categories, loadingCategories } = useCategory();
	return (
		<main className='app-main-content'>
			<section id='hero-div'>
				<div className='card-overlay-holder image'>
					<img
						src='https://gmedia.playstation.com/is/image/SIEPDC/ps4-games-page-banner-hero-desktop-01-en-11nov20?$native$'
						alt='Ps game background'
					/>
					<div className='card-overlay'>
						<h1>ARE YOU THAT EPIC GAMER?</h1>
						<a href='#categories-section' className='btn btn-link flex-column text-align-center'>
							<h1>Take the quiz!</h1>
						</a>
					</div>
				</div>
			</section>

			<section id='categories-section' className='categories-section'>
				<h1 className='categories-header'> Categories </h1>
				<hr />
				{!loadingCategories &&
					categories.map((category) => (
						<CategoryCard
							key={category._id}
							name={category.categoryName}
							src={category.images[Math.floor(Math.random() * category.images.length)]}
						/>
					))}
			</section>
		</main>
	);
};

export { HomePage };
