// IMPORTS
import 'components/01-atoms/hamburger/hamburger.scss';

// HAMBURGER
const Hamburger = ({ className = '', open = false, onClick = null }) => {
	
	// RENDER
	return (
		<button className={ ` ${ className } hamburger-menu hamburger--squeeze hamburger ${ open ? 'is-active' : '' }` } type="button" onClick={ onClick }>
			<span className="hamburger__box">
				<span className="hamburger__inner"></span>
			</span>
		</button>
	);
	
};

// EXPORTS
export {
	Hamburger
};
