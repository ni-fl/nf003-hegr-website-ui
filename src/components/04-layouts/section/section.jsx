// IMPORTS
import 'components/04-layouts/section/section.scss';

// SECTION
const Section = ({ className, children }) => {
	
	// RENDER
	return (
		<div className={ `${ className } section` }>
			<div className={ `${ className }__inner section__inner` }>
				{ children }
			</div>
		</div>
	);
	
};

// EXPORTS
export {
	Section
};
