// IMPORTS
import 'components/01-atoms/text/text.scss';

// TEXT
const P = ({ className, children }) => {

	// RENDER
	return (
		<p className={ `${ className } text` }>{ children }</p>
	);

};

// EXPORTS
export {
	P,
}
