import React, { useState } from 'react';
import { HidePasswordEyeIcon, ShowPasswordEyeIcon } from '../../../Asset/AllSVG.jsx';
import { useAuth, useModal } from '../../../Context';
import './AuthModalComponent.css';

const AuthModalComponent = () => {
	const { isLoginModal, isLoading, error, toggleIsLoginModal, signUpHandler, loginHandler, errorHandler } = useAuth();
	const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
	const { closeModal } = useModal();
	const defaultText = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		nameError: false,
		emailError: false,
		passWordError: false,
		confirmPasswordError: false,
	};

	const testUser = {
		email: 'zoef@gmail.com',
		password: '1234567890',
	};

	const [textFields, setTextFields] = useState(defaultText);

	const loginSignUpToggler = () => {
		toggleIsLoginModal();
		errorHandler(false, '');
		setShowPassword({ password: false, confirmPassword: false });
	};
	const setUserDetails = (e) => {
		errorHandler(false, '');
		setTextFields({
			...textFields,
			[e.target.name]: e.target.value,
			nameError: false,
			emailError: false,
			passWordError: false,
			confirmPasswordError: false,
		});
	};

	const signupChecker = () => {
		const { email, password, confirmPassword, name } = textFields;
		name.length > 2
			? email.length !== 0
				? email
						.toLowerCase()
						.match(
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						)
					? password.length > 5
						? confirmPassword.length > 5
							? password === confirmPassword
								? signUpHandler({ email: email, password: password, name: name })
								: (setTextFields({
										...textFields,
										confirmPasswordError: true,
										passWordError: true,
								  }),
								  errorHandler(true, 'Password and Confirm Password must be same'))
							: (setTextFields({ ...textFields, confirmPasswordError: true }),
							  errorHandler(true, 'Confirm Password cannot be shorter than 6 characters'))
						: (errorHandler(true, 'Password cannot be shorter than 6 characters'), setTextFields({ ...textFields, passWordError: true }))
					: (errorHandler(true, 'Email is invalid'), setTextFields({ ...textFields, emailError: true }))
				: (setTextFields({ ...textFields, emailError: true }), errorHandler(true, 'Email is required'))
			: (setTextFields({ ...textFields, nameError: true }), errorHandler(true, 'Name must be atleast 2 characters long'));
	};

	const loginChecker = async () => {
		const { email, password } = textFields;

		return email.length !== 0
			? email
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					)
				? password.length > 5
					? loginHandler({ email: email, password: password })
					: (errorHandler(true, 'Password cannot be shorter than 6 characters'), setTextFields({ ...textFields, passWordError: true }))
				: (errorHandler(true, 'Email is invalid'), setTextFields({ ...textFields, emailError: true }))
			: (setTextFields({ ...textFields, emailError: true }), errorHandler(true, 'Email is required'));
	};

	const togglePassword = (name) => {
		setShowPassword({ ...showPassword, [name]: !showPassword[name] });
	};

	return (
		<div className='modal-card flex-column align-items-center space-evenly' onClick={(e) => e.stopPropagation()}>
			<h1>{isLoginModal ? 'Login' : 'Sign Up'}</h1>
			<div className='input-group'>
				{!isLoginModal && (
					<InputField
						labelText='Name'
						type='text'
						name='name'
						onChange={setUserDetails}
						value={textFields.name}
						hasError={textFields.nameError}
					/>
				)}
				<InputField
					labelText='Email Address'
					type='email'
					name='email'
					onChange={setUserDetails}
					hasError={textFields.emailError}
					value={textFields.email}
				/>
				<InputField
					labelText='Password'
					type={!showPassword.password ? 'password' : 'text'}
					name='password'
					onChange={setUserDetails}
					hasError={textFields.passWordError}
					value={textFields.password}
					passwordType={'password'}
					onClick={togglePassword}
				/>
				{!isLoginModal && (
					<>
						<InputField
							labelText='Confirm password'
							type={!showPassword.confirmPassword ? 'password' : 'text'}
							name='confirmPassword'
							onChange={setUserDetails}
							hasError={textFields.confirmPasswordError}
							value={textFields.confirmPassword}
							onClick={togglePassword}
							passwordType={'confirmPassword'}
						/>
					</>
				)}
			</div>

			{isLoginModal && (
				<p
					onClick={() =>
						setTextFields({
							...textFields,
							password: testUser.password,
							email: testUser.email,
						})
					}
					className='btn btn-link'
				>
					Test Login
				</p>
			)}

			<button
				onClick={
					isLoginModal
						? async () => {
								const success = await loginChecker();
								success && (closeModal(), setTextFields(defaultText));
						  }
						: () => {
								signupChecker();
						  }
				}
				className={`btn modal-button ${isLoading ? 'modal-btn-disabled' : 'btn-primary'}`}
			>
				{isLoading ? 'Loading...' : isLoginModal ? 'Login' : 'SignUp'}
			</button>
			{error.hasError && <p className='modal-error'> *{error.errorMessage} </p>}
			<button onClick={loginSignUpToggler} className=' btn-link btn'>
				{isLoginModal ? "Don't have account? Sign up!" : 'Already have account? Log In!'}
			</button>
		</div>
	);
};

export { AuthModalComponent };

const InputField = ({ labelText, type, name, onChange, value, hasError, onClick, passwordType }) => {
	return (
		<>
			<div className='flex-row align-items-center space-between '>
				<label htmlFor='email'>{labelText}</label>
				{labelText.toLowerCase().includes('password') &&
					(type === 'password' ? (
						<ShowPasswordEyeIcon className='header-icon' onClick={() => onClick(passwordType)} />
					) : (
						<HidePasswordEyeIcon className='header-icon' onClick={() => onClick(passwordType)} />
					))}
			</div>
			<input
				className={`text-field ${hasError && 'text-field-error'} `}
				autoComplete='off'
				type={type}
				name={name}
				placeholder={labelText}
				onChange={onChange}
				value={value}
			/>
		</>
	);
};
