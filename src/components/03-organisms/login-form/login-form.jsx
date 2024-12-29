'use client';

// IMPORTS
import 'components/03-organisms/login-form/login-form.scss';
import { useEffect, useState } from 'react';
import { ChevronLeft, X as Close } from 'react-feather';
import { useRouter } from 'next/navigation';
import { sha256 } from 'js-sha256';

// LOGIN FORM
const LoginForm = () => {
	
	// BRING IN ROUTER
	const router = useRouter();
	
	// SETUP STATE
	const [pin, setPin] = useState('');
	
	// EVENT HANDLERS
	const updatePin = (value) => setPin(pin + value);
	const resetPin = () => setPin('');
	const deletePin = () => setPin(pin.substring(0, pin.length - 1));
	
	// CHECK PIN
	const checkPin = (pin) => {
		
		// COMPARE PIN
		if (pin === process.env.NEXT_PUBLIC_PIN) {
			
			// CREATE AUTH-TOKEN
			const authToken = sha256(pin);
			
			// SET AUTH-TOKEN
			document.cookie = `auth-token=${ authToken }; path=/`;
			
			// REDIRECT TO WEBSITE
			router.push('/');
			
		}
		
	};
	
	// CHECK FORM WHEN INPUT OF 6 CHARS IS REACHED
	useEffect(() => {
		
		// CHECK LENGHT OF PIN
		if (pin.length === 6) {
			
			// CHECK LOGIN-CODE
			checkPin(pin);
			
		} else if (pin.length > 6) {
			
			// RESET INPUT
			resetPin();
			
		}
		
		
	}, [pin]);
	
	// UPDATE INPUT ON KEYPRESS
	const handleKeyPress = (event) => {
		updatePin(event.key);
	};
	
	// LISTEN ON KEYDOWN
	useEffect(() => {
		
		// ADD EVENT-LISTENER
		document.addEventListener('keydown', handleKeyPress);
		
		// CLEAN UP EVENT-LISTENER
		return () => { return document.removeEventListener('keydown', handleKeyPress); };
		
	}, [pin]);
	
	// RENDER
	return (
		<div className="login-form">
			<div className="login-form__card">
				<img className="login-form__logo" src="/logos/heller-grafik/full.svg" width="80" height="80" alt="SAYYES"/>
				<div className="login-form__dialpad">
					<button className="login-form__dialpad-button" onClick={ () => updatePin(1) } type="button">1</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(2) } type="button">2</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(3) } type="button">3</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(4) } type="button">4</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(5) } type="button">5</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(6) } type="button">6</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(7) } type="button">7</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(8) } type="button">8</button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(9) } type="button">9</button>
					<button className="login-form__dialpad-button" onClick={ () => deletePin() } type="button"><ChevronLeft className="login-form__dialpad-button-icon"/></button>
					<button className="login-form__dialpad-button" onClick={ () => updatePin(0) } type="button">0</button>
					<button className="login-form__dialpad-button" onClick={ () => resetPin() } type="button"><Close className="login-form__dialpad-button-icon"/></button>
				</div>
				<div className="login-form__status">
					<div className={ `login-form__status-dot ${ pin.length >= 1 ? 'login-form__status-dot--active' : '' }` }/>
					<div className={ `login-form__status-dot ${ pin.length >= 2 ? 'login-form__status-dot--active' : '' }` }/>
					<div className={ `login-form__status-dot ${ pin.length >= 3 ? 'login-form__status-dot--active' : '' }` }/>
					<div className={ `login-form__status-dot ${ pin.length >= 4 ? 'login-form__status-dot--active' : '' }` }/>
					<div className={ `login-form__status-dot ${ pin.length >= 5 ? 'login-form__status-dot--active' : '' }` }/>
					<div className={ `login-form__status-dot ${ pin.length >= 6 ? 'login-form__status-dot--active' : '' }` }/>
				</div>
			</div>
		</div>
	);
	
};

// EXPORTS
export default LoginForm;