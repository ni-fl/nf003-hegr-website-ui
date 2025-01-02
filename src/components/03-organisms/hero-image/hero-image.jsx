// IMPORTS
import 'components/03-organisms/hero-image/hero-image.scss';
import { P } from 'components/01-atoms/text/text.jsx';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from 'components/04-layouts/section/section.jsx';

// CONTACT INFOS
const HeroImage = ({ className, data }) => {
	
	
	// RENDER
	return (
		<Section className={ `${ className } hero-image ${ data?.hasPadding === false ? 'hero-image--no-padding' : '' }` }>
				<Image className="hero-image__image" src={data?.image?.url} alt={data?.image?.alternativeText || "heller grafik"} priority  width={ data?.image?.width } height={data?.image?.height}/>
		</Section>
	);
	
};

// EXPORTS
export {
	HeroImage
};
