import { AppRoutes, Footer, ModalComponent, Navbar } from './Components/index';
import { useModal } from './Context';
import './index.css';
function App() {
	const { isModalOpened, openModal, closeModal, modalChildComponent } = useModal();

	return (
		<div className='game-e-quiz-app '>
			<Navbar />
			<AppRoutes />
			<Footer />
			<ModalComponent isModalOpened={isModalOpened} modalChildComponent={modalChildComponent} closeModal={closeModal} />
		</div>
	);
}

export default App;
