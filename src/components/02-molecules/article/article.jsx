// IMPORTS
import 'components/02-molecules/article/article.scss';
import { H1, H3 } from "components/01-atoms/heading/heading.jsx";
import { MD } from "components/01-atoms/markdown/markdown.jsx";
import { P } from 'components/01-atoms/text/text.jsx';

// ARTICLE
const Article = ({ className, title, text, details }) => {

	// RENDER
	return (
		<div className={ `${ className } article` }>
			<H1 className="article__heading">{ title }</H1>
			<MD className="article__text text" children={ text }/>
			<div className="article__details details">
				{ details.map( (detail) => (
					<div className="details__item item" key={ detail.id }>
						<H3 className="item__heading" level="h3">{ detail.title }</H3>
						<div className="item__detail detail">
							{ detail.content.map( (item) => (
								<P className="detail__text text">{ item.value }</P>
							) ) }
						</div>
					</div>
				) ) }
			</div>
		</div>
	);

};

// EXPORTS
export {
	Article,
}
