// IMPORTS
import 'components/03-organisms/intro/intro.scss';
import { Section } from "components/04-layouts/section/section";
import { H2 } from "components/01-atoms/heading/heading";
import { SmallArrowLink } from "components/01-atoms/small-arrow-link/small-arrow-link";

// INTRO
const Intro = ({ data }) => {

	// RENDER
	return (
		<Section className="intro">
			<H2 className="intro__heading" level="h1">{ data.attributes.heading }</H2>
			<H2 className="intro__subheading" level="h2">{ data.attributes.subheading }</H2>
			<SmallArrowLink className="intro__link" href={ data.attributes.button.href }>{ data.attributes.button.label }</SmallArrowLink>
		</Section>
	);

};

// EXPORTS
export {
	Intro
};
