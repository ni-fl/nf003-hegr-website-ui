// IMPORTS
import 'components/03-organisms/teaser/teaser.scss';
import { Section } from 'components/04-layouts/section/section';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link';
import { H2 } from 'components/01-atoms/heading/heading.jsx';
import Image from 'next/image';

// TEASER
const Teaser = ({ data }) => {
	
	// RENDER
	return (
		<Section className="teaser">
			<H2 className="teaser__heading" level="h1" looklike="h1">{ data?.heading }</H2>
			<H2 className="teaser__subheading" level="h2">{ data?.subheading }</H2>
			<SmallArrowLink className="teaser__link" href={ data?.button?.href }>{ data?.button.label }</SmallArrowLink>
			<Image className="teaser__image" src={ data?.image?.url } width={ data?.image?.width } height={ data?.image.height } alt="Heller Grafik"/>
		</Section>
	);
	
};

// EXPORTS
export {
	Teaser
};
