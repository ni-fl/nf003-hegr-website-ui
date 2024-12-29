// IMPORTS
import 'components/02-molecules/small-link/small-link.scss';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';

// CONTACT INFOS
const SmallLink = ({ className, data }) => {
	
	// RENDER
	return (
		<div className={ `${ className } small-link` }>
			<SmallArrowLink className="small-link__link" href={data.href}>{data.label}</SmallArrowLink>
		</div>
	);
	
};

// EXPORTS
export {
	SmallLink
};
