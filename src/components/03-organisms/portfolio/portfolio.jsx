// IMPORTS
import 'components/03-organisms/portfolio/portfolio.scss';
import { Section } from "components/04-layouts/section/section";
import Link from "next/link";
import Image from "next/image";
import { BigArrowLink } from "components/01-atoms/big-arrow-link/big-arrow-link";

// PORTFOLIO
const Portfolio = ({ data }) => {

	// RENDER
	return (
		<Section className="portfolio">
			{ data.attributes.projects.data.map((item) => (
				<div className={ `project-preview` }>
					<Link className="project-preview__image-link" href={ `/project/${ item.id }` }>
						<Image className="project-preview__image" src={ item.attributes.teaser.image.data.attributes.url } width="2500" height="2000" alt={ 'haha' }/>
					</Link>
					<BigArrowLink className="project-preview__link" href={ `/project/${ item.id }` }>{ item.attributes.heading }</BigArrowLink>
				</div>
			))}
		</Section>
	);

};

// EXPORTS
export {
	Portfolio,
};
