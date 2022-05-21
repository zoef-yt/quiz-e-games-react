import { useModal } from '../../../Context';
import './RulesModalComponent.css';

const RulesModalComponent = () => {
	const { closeModal } = useModal();

	return (
		<div className='rules-modal-card flex-column align-items-center space-evenly' onClick={(e) => e.stopPropagation()}>
			<h1>Rules to Follow</h1>
			<hr />
			<ul className='list-group'>
				<SingleRule text={'Every quiz has 2 points per question'} />
				<SingleRule text={'All question are mandatory to answer'} />
			</ul>
			<button
				onClick={() => {
					closeModal();
				}}
				className='btn btn-primary'
			>
				START QUIZ!
			</button>
		</div>
	);
};

const SingleRule = ({ text }) => {
	return (
		<li className='list-group-item'>
			<h4>{text}</h4>
		</li>
	);
};

export { RulesModalComponent };
