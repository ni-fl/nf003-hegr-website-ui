// IMPORTS
import 'components/04-layouts/blank-site/blank-site.scss';

// SITE
const BlankSite = ({ className, children }) => {
	
	// RENDER
	return (
		<div className={ `${ className } blank-site` }>
			<div className="blank-site__inner">
				<div className="blank-site__content">
					{ children }
				</div>
			</div>
		</div>
	);
	
};

// EXPORTS
export {
	BlankSite
};
