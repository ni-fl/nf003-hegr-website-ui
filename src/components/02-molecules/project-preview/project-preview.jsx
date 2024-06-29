// IMPORTS
import 'components/02-molecules/project-preview/project-preview.scss';
import { BigArrowLink } from "components/01-atoms/big-arrow-link/big-arrow-link";
import Image from "next/image";
import Link from "next/link";

// PROJECT PREVIEW
const ProjectPreview = ({ className, title, image, href }) => {

	// RENDER
	return (
		<div className={ `${ className } project-preview` }>
			<Link className="project-preview__image-link" href={ href }>
				<Image className="project-preview__image" src={ image.src } width="2500" height="2000" alt={ image.alt }/>
			</Link>
			<BigArrowLink className="project-preview__link" href={ href }>{ title }</BigArrowLink>
		</div>
	);

};

// EXPORTS
export {
	ProjectPreview
};
