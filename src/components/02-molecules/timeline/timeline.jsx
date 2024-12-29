// IMPORTS
import 'components/02-molecules/timeline/timeline.scss';
import { H3 } from 'components/01-atoms/heading/heading.jsx';

// PROJECT PREVIEW
const Timeline = ({ data, className }) => {
	
	// RENDER
	return (
		<div className={ `${ className } timeline` }>
			<H3 className="timeline__heading">{ data.heading }</H3>
			{ data?.events?.map((event, index) => (
				<div className="timeline__item" key={index}>
					<p className="timeline__item-date">{ event.date }</p>
					<p className="timeline__item-description">{ event.description }</p>
				</div>
			)) }
		</div>
	);
	
};

// EXPORTS
export {
	Timeline
};
