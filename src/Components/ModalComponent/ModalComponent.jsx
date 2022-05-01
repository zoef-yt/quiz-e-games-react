import { AuthModalComponent } from './ModalContent/AuthModalComponent.jsx';
import { RulesModalComponent } from './ModalContent/RulesModalComponent.jsx';

const ModalComponent = ({ isModalOpened, closeModal, modalChildComponent }) => {
	const setModalData = (modalChildName) => {
		switch (modalChildName) {
			case 'AuthModal':
				return <AuthModalComponent />;
			case 'RulesModal':
				return <RulesModalComponent />;
			default:
				closeModal();
				return <></>;
		}
	};
	return (
		<div onClick={() => closeModal()} className={`${isModalOpened ? 'modal-opened' : 'modal-display-none'}`}>
			{setModalData(modalChildComponent)}
		</div>
	);
};

export { ModalComponent };
