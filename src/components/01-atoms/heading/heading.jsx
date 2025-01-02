// IMPORTS
import 'components/01-atoms/heading/heading.scss';

// H1 HEADING
const H1 = ({ className, children, level, looklike }) => {
	
	// RENDER
	return (
		<h1 className={ ` ${ className } heading heading--${ looklike || level }` }>{ children }</h1>
	);
	
};

// H2 HEADING
const H2 = ({ className, children, level, looklike }) => {
	
	// RENDER
	return (
		<h2 className={ ` ${ className } heading heading--${ looklike || level }` }>{ children }</h2>
	);
	
};

// H3 HEADING
const H3 = ({ className, children, level, looklike }) => {
	
	// RENDER
	return (
		<h3 className={ ` ${ className } heading heading--${ looklike || level }` }>{ children }</h3>
	);
	
};

// EXPORTS
export {
	H1,
	H2,
	H3
};
