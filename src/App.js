import { AppRoutes, Footer, Navbar } from './Components/index';
import './index.css';
function App() {
	return (
		<div className='game-e-quiz-app '>
			<Navbar />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export default App;
