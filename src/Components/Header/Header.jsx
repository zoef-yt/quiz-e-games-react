import { NavLink } from 'react-router-dom';
import { HalfMoonIcon, SunIcon } from '../../Asset/AllSVG';
import { useTheme } from '../../Context/index';
import './Header.css';
const Header = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className='header-mobile'>
			<div className='header'>
				<NavLink className='header-brand' to='/'>
					<p>Quiz-E-Games</p>
				</NavLink>
				<input type='search' className='text-field' placeholder='Search' />
				<div className='header-cta'>
					<div className='flex-column' onClick={toggleTheme}>
						{theme === 'dark' ? <SunIcon className='header-icon' /> : <HalfMoonIcon className='header-icon' />}
					</div>
					{/*//! CODE FOR FUTURE */}

					{/* {user ? (
						<div className='profile-modal-holder'>
							<div className='avatar avatar-sm not-selectable '>{user?.userInfo.name.substring(0, 1).toUpperCase()}</div>
							<div className='profile-modal not-selectable '>
								<ProfileModalLink text='Profile' navigateTo='/my-profile' />
								<li onClick={() => logoutHandler()}>Logout 😞</li>
							</div>
						</div>
					) : ( */}
					<button className='btn btn-link'>Sign Up</button>
				</div>
			</div>
			<input type='search' className='text-field mobile-searchbar' placeholder='Search' />
		</nav>
	);
};

export { Header };

const ProfileModalLink = ({ text, navigateTo }) => {
	const navigate = useNavigate();
	return (
		<>
			<li onClick={() => navigate(navigateTo)}>{text}</li>
			<hr />
		</>
	);
};
