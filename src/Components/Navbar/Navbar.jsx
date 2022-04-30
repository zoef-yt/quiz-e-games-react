import { NavLink, useNavigate } from 'react-router-dom';
import { HalfMoonIcon, SunIcon } from '../../Asset/AllSVG.jsx';
import { useTheme, useModal, useAuth } from '../../Context/index.js';

import './Navbar.css';
const Navbar = () => {
	const { openModal } = useModal();
	const { theme, toggleTheme } = useTheme();
	const { logoutHandler, user, isLoginModal } = useAuth();

	return (
		<nav className='navbar-mobile'>
			<div className='navbar'>
				<NavLink className='navbar-brand ' to='/'>
					<h3>Quiz-E-Games</h3>
				</NavLink>
				<input type='search' className='text-field' placeholder='Search For Quiz' />
				<div className='navbar-cta'>
					<div className='flex-column' onClick={toggleTheme}>
						{theme === 'dark' ? <SunIcon className='header-icon' /> : <HalfMoonIcon className='header-icon' />}
					</div>
					{user ? (
						<div className='profile-modal-holder'>
							<div className='avatar avatar-sm not-selectable '>{user?.userInfo.name?.substring(0, 1).toUpperCase()}</div>
							<div className='profile-modal not-selectable '>
								<ProfileModalLink text='Home' navigateTo='/' />
								<li onClick={() => logoutHandler()}>Logout 😞</li>
							</div>
						</div>
					) : (
						<button onClick={() => openModal('AuthModal')} className='btn btn-link'>
							{isLoginModal ? 'Login' : 'Sign Up'}
						</button>
					)}
				</div>
			</div>
			<input type='search' className='text-field mobile-searchbar' placeholder='Search For Quiz' />
		</nav>
	);
};

export { Navbar };

const ProfileModalLink = ({ text, navigateTo }) => {
	const navigate = useNavigate();
	return (
		<>
			<li onClick={() => navigate(navigateTo)}>{text}</li>
			<hr />
		</>
	);
};
