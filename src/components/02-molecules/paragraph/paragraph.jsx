// IMPORTS
import { Partial} from 'components/04-layouts/partial/partial.jsx';
import { H3 } from 'components/01-atoms/heading/heading.jsx';
import { RT } from 'components/01-atoms/rich-text/rich-text.jsx';

// PARAGRAPH
const Paragraph = ({ data, className }) => {
	
	// RENDER
	return (
		<Partial className={ `${ className } paragraph` }>
			<H3 className="paragraph__heading">{ data?.heading }</H3>
			<RT className="paragraph__text">{ data?.text }</RT>
		</Partial>
	);
	
};

// EXPORTS
export {
	Paragraph
};
