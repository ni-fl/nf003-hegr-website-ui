// IMPORTS
import 'components/01-atoms/rich-text/rich-text.scss';
import { P } from 'components/01-atoms/text/text.jsx';

// TEXT
const RT = ({ className, children }) => {

	// RENDER
	return (
		<div className={ `${ className } rich-text` }>
			{ children.map((content) => (
				<div className="rich-text__item item">
					{ content.children.map((text) => (
						<P className="item__text">{text.text}</P>
					))}
				</div>
			))}
		</div>
	);

};

// EXPORTS
export {
	RT,
}
