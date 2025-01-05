// IMPORTS
import 'components/03-organisms/intro/intro.scss';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';
import { H1 } from 'components/01-atoms/heading/heading.jsx';

// INTRO
const Intro = ({ className, data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } intro` }>
			<div className="intro__headings">
				{ data?.headings?.map((item, index) => (
					<H1 className="intro__heading" level="h1" looklike="h1" key={index}>{ item.text }</H1>
				)) }
			</div>
			{ data?.link && (
				<SmallArrowLink className="intro__link" href={ data?.link?.href }>{ data?.link?.label }</SmallArrowLink>
			) }
		</Section>
	);
	
};

// EXPORTS
export {
	Intro
};
