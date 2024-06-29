// IMPORTS
import { Section } from "components/04-layouts/section/section";
import { ProjectPreview } from "components/02-molecules/project-preview/project-preview";
import { BigArrowLink } from "components/01-atoms/big-arrow-link/big-arrow-link";
import Image from "next/image";
import Link from "next/link";

// SHOWCASE
const Showcase = ({ data }) => {

	// RENDER
	return (
		<Section className="showcase">
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
	Showcase,
};
