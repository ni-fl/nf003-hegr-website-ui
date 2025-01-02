// IMPORTS
import 'components/03-organisms/project/project.scss';
import Image from 'next/image';
import { Section } from 'components/04-layouts/section/section';
import { H1 } from 'components/01-atoms/heading/heading.jsx';
import { HeroImage } from 'components/03-organisms/hero-image/hero-image.jsx';
import { Projects } from 'components/03-organisms/projects/projects.jsx';
import { Article } from 'components/03-organisms/article/article.jsx';
import { Intro } from 'components/03-organisms/intro/intro.jsx';
import { Paragraph } from 'components/02-molecules/paragraph/paragraph.jsx';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';
import { Main } from 'components/05-renderer/main/main.jsx';

// TEASER
const Project = ({ content }) => {
	
	// RENDER
	return (
		<Section className="project">
			{ content?.logo[0]?.image && (
				<Image className="project__image" src={ content?.logo[0]?.image?.url } width={ content?.logo[0]?.image?.width } height={ content?.logo[0]?.image?.height } alt={ content?.heading }/>
			)}
			{ content?.logo[0]?.video && content?.logo[0]?.poster && (
				<video className="project__video" preload="auto" autoPlay muted loop playsInline width={ content?.logo[0]?.poster?.width } height={ content?.logo[0]?.poster?.height } poster={ content?.logo[0]?.poster?.url }>
					<source src={ content?.logo[0]?.video?.url } type="video/mp4"/>
				</video>
			)}
			<div className="project__article">
				<H1 className="project__article-heading" level="h1" looklike="h1">{ content?.heading }</H1>
				<Main className="project__article-infos" content={content?.infos} />
			</div>
			<div className="project__impressions">
				{ content?.impressions.map((impression, index) => (
					<Image className="project__impression" key={index} src={ impression?.image?.url } width={ impression?.image?.width } height={ impression?.image?.height } alt={ content?.heading } data-format={ impression?.format }/>
				)) }
			</div>
			<SmallArrowLink className="project__link" href={ `/project/${ content?.project?.documentId }` }>nächstes Projekt ansehen</SmallArrowLink>
		</Section>
	);
	
};

// EXPORTS
export {
	Project
};
