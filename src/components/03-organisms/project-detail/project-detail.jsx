// IMPORTS
import 'components/03-organisms/project-detail/project-detail.scss';
import { Article } from "components/04-layouts/article/article";
import { Section } from "components/04-layouts/section/section";
import { Picture } from "components/02-molecules/picture/picture";
import { H1, H3 } from 'components/01-atoms/heading/heading.jsx';
import { P } from "components/01-atoms/text/text";
import { LI } from 'components/01-atoms/list-item/list-item';
import { RT } from 'components/01-atoms/rich-text/rich-text';

// PROJECT DETAIL
const ProjectDetail = ({ data }) => {

	// RENDER
	return (
		<Section className="project-detail">
			{ data.attributes.teaser.video?.data 
			? (
			<video className="project-detail__video" controls={ false } preload="auto" autoPlay muted loop poster={ data.attributes.teaser.image.data.attributes.url } >
				<source src={ data.attributes.teaser.video.data.attributes.url } type="video/mp4" playsInline />
			</video>
			) : <Picture className="project-detail__image" src={ data.attributes.teaser.image.data.attributes.url } priority={ true }/> }
			<Article className="project-detail__article article">
				<H1 className="article__heading">{ data.attributes.heading }</H1>
				<RT className="article__text">{ data.attributes.text }</RT>
				<div className="article__details details">
				{ data.attributes.article.details.map(( item )=> (
					<div className="details__item item">
						<H3 className="item__subheading" level="h3">{ item.heading }</H3>
						<RT className="item__text">{ item.text }</RT>
					</div>
				))}
				</div>
			</Article>
			<div className="project-detail__gallery gallery">
			{ data.attributes.gallery.map((item) => (
				<Picture className="gallery__image image" data-format={ item.format } src={ item.image.data.attributes.url } key={ item.id } priority={ true } format={ item.format } /> 
			 ))}
			</div>
		</Section>
	);

};

// EXPORTS
export {
	ProjectDetail,
};
