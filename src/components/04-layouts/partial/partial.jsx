// IMPORTS
import 'components/04-layouts/partial/partial.scss';

// PARTIAL
const Partial = ({ className, children }) => {
	
	// RENDER
	return (
		<div className={ `${ className } partial` }>
			{ children }
		</div>
	);
	
};

// EXPORTS
export {
	Partial
};
