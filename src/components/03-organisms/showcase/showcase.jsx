// IMPORTS
import 'components/03-organisms/showcase/showcase.scss';
import { Section } from 'components/04-layouts/section/section';
import { BigArrowLink } from 'components/01-atoms/big-arrow-link/big-arrow-link';
import Image from 'next/image';
import Link from 'next/link';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';

// SHOWCASE
const Showcase = ({ data }) => {
	
	// RENDER
	return (
		<Section className="showcase">
			<div className="showcase__list">
				{ data?.projects?.map((item) => (
					<div className={ `showcase__list-item` } key={ item?.id }>
						<Link className="showcase__list-item-media-link" href={ `/project/${ item?.documentId }` }>
							{ item?.teaser[0]?.image && (
								<Image className="showcase__list-item-image" src={ item?.teaser[0]?.image?.url } width={ item?.teaser[0]?.image?.width } height={ item?.teaser[0]?.image?.height } alt={ item?.heading }/>
							) }
							{ item?.teaser[0]?.video && item?.teaser[0]?.poster && (
								<video className="showcase__list-item-video" preload="auto" autoPlay muted loop playsInline width={ item?.teaser[0]?.poster?.width } height={ item?.teaser[0]?.poster?.height } poster={ item?.teaser[0]?.poster?.url }>
									<source src={ item?.teaser[0]?.video?.url } type="video/mp4"/>
								</video>
							) }
						</Link>
						<BigArrowLink className="showcase__list-item-link" href={ `/project/${ item?.documentId }` }>{ item?.heading }</BigArrowLink>
					</div>
				)) }
			</div>
			<SmallArrowLink className="showcase__link" href="/projects">Alle Projekte ansehen</SmallArrowLink>
		</Section>
	);
	
};

// EXPORTS
export {
	Showcase
};
