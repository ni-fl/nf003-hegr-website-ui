// IMPORTS
import 'components/03-organisms/portfolio/portfolio.scss';
import { Section } from 'components/04-layouts/section/section';
import Link from 'next/link';
import Image from 'next/image';
import { BigArrowLink } from 'components/01-atoms/big-arrow-link/big-arrow-link';

// PORTFOLIO
const Portfolio = ({ data }) => {
	
	// RENDER
	return (
		<Section className="portfolio">
			<div className="portfolio__list">
				{ data?.projects?.map((item) => (
					<div className={ `portfolio__list-item` } key={ item?.id }>
						<Link className="portfolio__list-item-media-link" href={ `/project/${ item?.documentId }` }>
							{ item?.teaser[0]?.image && (
								<Image className="portfolio__list-item-image" src={ item?.teaser[0]?.image?.url } width={ item?.teaser[0]?.image?.width } height={ item?.teaser[0]?.image?.height } alt={ item?.heading }/>
							) }
							{ item?.teaser[0]?.video && item?.teaser[0]?.poster && (
								<video className="portfolio__list-item-video" preload="auto" autoPlay muted loop playsInline width={ item?.teaser[0]?.poster?.width } height={ item?.teaser[0]?.poster?.height } poster={ item?.teaser[0]?.poster?.url }>
									<source src={ item?.teaser[0]?.video?.url } type="video/mp4"/>
								</video>
							) }
						</Link>
						<BigArrowLink className="portfolio__list-item-link" href={ `/project/${ item?.documentId }` }>{ item?.heading }</BigArrowLink>
					</div>
				)) }
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Portfolio
};
