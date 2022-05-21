import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../../Context';

const CategoryCard = ({ name, src }) => {
	const { filterDispatch } = useFilter();
	const navigate = useNavigate();
	const navigateWithSelectedCategory = () => {
		filterDispatch({ type: 'CATEGORY_SELECTION', payload: name });
		navigate('/all-quizzes');
	};

	return (
		<div className='card card-md'>
			<div className='card-body'>
				<div className='card-overlay-holder image'>
					<img className='card-img' src={src} alt={name} />
					<div className='card-overlay'>
						<h3>{name}</h3>
						<button onClick={navigateWithSelectedCategory} className='btn btn-link flex-column text-align-center'>
							Select category
						</button>
					</div>
				</div>
			</div>
			<div className='card-footer space-around'>
				<button onClick={navigateWithSelectedCategory} className='btn btn-primary'>
					Select category
				</button>
			</div>
		</div>
	);
};

export { CategoryCard };
