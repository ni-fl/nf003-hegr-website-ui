// IMPORT
import 'components/03-organisms/hero/hero.scss';
import { Section } from "components/04-layouts/section/section";
import { Picture } from "components/02-molecules/picture/picture";

// HERO
const Hero = ({ data }) => {

	// RENDER
	return (
		<Section className="hero">
			<Picture className="hero__image" src={ data.attributes.image.data.attributes.url } alt="heller grafik" priority={ true }/>
		</Section>
	);

};

// EXPORTS
export {
	Hero,
};
