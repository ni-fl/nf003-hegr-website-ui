// IMPORTS
import 'components/01-atoms/rich-text/rich-text.scss';
import { P } from 'components/01-atoms/text/text.jsx';
import Link from 'next/link';

// TEXT
const RT = ({ className, children }) => {
	
	// RENDER
	return (
		<div className={ `${ className } rich-text` }>
			{ children?.map((content, index) => (
				<div className="rich-text__block" key={ index }>
					{ content.children.map((item, index) => (
						<span className="rich-text__item" key={ index }>
							{ item.type === 'text' ? (
								<P className="rich-text__text">{ item.text }</P>
							) : '' }
							{ item.type === 'link' ? item.children.map((subitem, index) => (
								<Link className="rich-text__link" href="#" key={ index }>
									<P className="rich-text__text">{ subitem.text }</P>
								</Link>
							)) : '' }
							{ item.type === 'list-item' ? item.children.map((subitem, index) => (
								<P className="rich-text__list-item" key={index}>{ subitem.text }</P>
							)) : '' }
						</span>
					)) }
				</div>
			)) }
		</div>
	);
	
};

// EXPORTS
export {
	RT
};
