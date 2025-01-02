// IMPORTS
import 'components/02-molecules/history/history.scss';
import { Partial} from 'components/04-layouts/partial/partial.jsx';
import { H3 } from 'components/01-atoms/heading/heading.jsx';
import { P } from 'components/01-atoms/text/text.jsx';

// HISTORY
const History = ({ data, className }) => {
	
	// RENDER
	return (
		<Partial className={ `${ className } history` }>
			<H3 className="history__heading">{ data.heading }</H3>
			{ data?.events?.map((event, index) => (
				<div className="history__item" key={index}>
					<P className="history__item-date">{ event.date }</P>
					<P className="history__item-description">{ event.description }</P>
				</div>
			)) }
		</Partial>
	);
	
};

// EXPORTS
export {
	History
};
