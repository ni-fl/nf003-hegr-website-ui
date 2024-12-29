// IMPORT
import 'components/03-organisms/hero/hero.scss';
import { Section } from 'components/04-layouts/section/section';
import { Picture } from 'components/02-molecules/picture/picture';
import { H2 } from 'components/01-atoms/heading/heading.jsx';
import { SmallArrowLink } from 'components/01-atoms/small-arrow-link/small-arrow-link.jsx';

// HERO
const Hero = ({ data }) => {
	
	// RENDER
	return (
		<Section className="hero">
			<Picture className="hero__image" src={ data?.image?.url } alt="heller grafik" priority={ true }/>
			<div className="hero__container">
				<H2 className="hero__heading" level="h1">{ data?.heading }</H2>
				<H2 className="hero__subheading" level="h2">{ data?.subheading }</H2>
				<SmallArrowLink className="hero__link" href={ data?.button?.href }>{ data?.button?.label }</SmallArrowLink>
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Hero
};
