// IMPORTS
import 'components/03-organisms/intro/intro.scss';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';

// INTRO
const Intro = ({ className, data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } intro` }>
			<div className="intro__headings">
				{ data?.headings?.map((item, index) => (
					<h1 className="intro__heading" level="h1" looklike="h1" key={index}>{ item.text }</h1>
				)) }
			</div>
			{ data?.link && (
				<SmallArrowLink className="intro__link">{ data?.link?.label }</SmallArrowLink>
			) }
		</Section>
	);
	
};

// EXPORTS
export {
	Intro
};
