// IMPORTS
import 'components/02-molecules/history/history.scss';
import { Partial} from 'components/04-layouts/partial/partial.jsx';
import { H3 } from 'components/01-atoms/heading/heading.jsx';
import { P } from 'components/01-atoms/text/text.jsx';
import { Fragment} from 'react';

// HISTORY
const History = ({ data, className }) => {
	
	// RENDER
	return (
		<Partial className={ `${ className } history` }>
			<H3 className="history__heading">{ data.heading }</H3>
			<div className="history__content">
			{ data?.events?.map((event, index) => (
				<Fragment key={index}>
					<P className="history__item-date">{ event.date }</P>
					<P className="history__item-description">{ event.description }</P>
				</Fragment>
			)) }
			</div>
		</Partial>
	);
	
};

// EXPORTS
export {
	History
};
