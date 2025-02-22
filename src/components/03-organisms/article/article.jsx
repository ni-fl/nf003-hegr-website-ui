// IMPORTS
import 'components/03-organisms/article/article.scss';
import { H1, H2, H3 } from 'components/01-atoms/heading/heading.jsx';
import { P } from 'components/01-atoms/text/text.jsx';
import { RT } from 'components/01-atoms/rich-text/rich-text.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';

// ARTICLE
const Article = ({ className, data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } article` }>
			<div className="article__container">
				<H1 className="article__heading" level="h1" looklike="h1">{ data.heading }</H1>
				<div className="article__detail">
					{ data?.infos?.map((info) => (
						<div className="article__detail-block" key={ info.id }>
							<H3 className="article__detail-headaing" level="h3">{ info?.heading }</H3>
							<RT className="article__detail-text">{ info?.text }</RT>
						</div>
					)) }
				</div>
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Article
};
