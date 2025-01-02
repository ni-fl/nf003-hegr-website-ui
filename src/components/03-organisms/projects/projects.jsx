// IMPORTS
import './projects.scss';
import Link from 'next/link';
import Image from 'next/image';
import { BigArrowLink } from 'components/01-atoms/big-arrow-link/big-arrow-link.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';

// SMALL ARROW LINK
const Projects = ({ className = '', data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } projects` }>
			{ data.projects.map((project, index) => (
				<div className="projects__item" key={ index }>
					{ project?.teaser[0]?.image ? (
						<Link className="projects__item-image-link" href={ `/project/${ project.documentId }` }>
							<Image className="projects__item-image" src={ project.teaser[0].image.url } alt="Image" width={ project.teaser[0].image.width } height={ project.teaser[0].image.height }/>
						</Link>
					) : '' }
					{ project?.teaser[0]?.video ? (
						<Link className="projects__item-video-link" href={ `/project/${ project.documentId }` }>
							<video className="projects__item-video" preload="auto" autoPlay muted loop playsInline>
								<source src={ project.teaser[0].video.url } type="video/mp4"/>
							</video>
						</Link>
					) : '' }
					<BigArrowLink href={ `/project/${ project.documentId }` }>{ project.heading }</BigArrowLink>
				</div>
			)) }
		</Section>
	);
	
};

// EXPORTS
export {
	Projects
};
