// IMPORTS
import 'components/03-organisms/project-detail/project-detail.scss';
import { Section } from 'components/04-layouts/section/section';
import { H1, H3 } from 'components/01-atoms/heading/heading.jsx';
import { RT } from 'components/01-atoms/rich-text/rich-text.jsx';
import Image from 'next/image.js';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';

// PROJECT DETAIL
const ProjectDetail = ({ data }) => {
	
	// RENDER
	return (
		<Section className="project-detail">
			{ data?.teaser[0]?.image && (
				<Image className="project-detail__image" src={ data?.teaser[0]?.image?.url } width={ data?.teaser[0]?.image?.width } height={ data?.teaser[0]?.image?.height } alt={ data?.heading }/>
			) }
			{ data?.teaser[0]?.video && data?.teaser[0]?.poster && (
				<video className="project-detail__video" preload="auto" autoPlay muted loop playsInline width={ data?.teaser[0]?.poster?.width } height={ data?.teaser[0]?.poster?.height } poster={ data?.teaser[0]?.poster?.url }>
					<source src={ data?.teaser[0]?.video?.url } type="video/mp4"/>
				</video>
			) }
			<div className="project-detail__article">
				<H1 className="project-detail__article-heading">{ data?.heading }</H1>
				<div className="project-detail__article-info-list">
					{ data?.infos?.map((info) => (
						<div className="project-detail__article-info-block" key={ info.id }>
							<H3 className="project-detail__article-info-subheading" level="h3">{ info?.subheading }</H3>
							<RT className="project-detail__article-text">{ info?.text }</RT>
						</div>
					)) }
				</div>
			</div>
			<div className="project-detail__impressions">
				{ data?.impressions.map((impression) => (
					<Image className="project-detail__impression" key={ impression?.id } src={ impression?.image?.url } width={ impression?.image?.width } height={ impression?.image?.height } alt={ data?.heading } data-format={ impression?.format }/>
				)) }
			</div>
			<SmallArrowLink className="project-detail__link" href={ `/project/${ data.project.documentId }` }>nächstes Projekt ansehen</SmallArrowLink>
		</Section>
	);
	
};

// EXPORTS
export {
	ProjectDetail
};
