// IMPORTS
import 'components/03-organisms/teaser/teaser.scss';
import { Section } from "components/04-layouts/section/section";
import { P } from "components/01-atoms/text/text";
import { SmallArrowLink } from "components/01-atoms/small-arrow-link/small-arrow-link";
import { Picture } from "components/02-molecules/picture/picture";

// TEASER
const Teaser = ({ data }) => {

	// RENDER
	return (
		<Section className="teaser">
			{ data.attributes.text.map((text) => (
				<div className="teaser__text-parent" key={ text.id }>
					{ text.children.map((item, index) => (
						<P className="teaser__text text--big" key={ index }>{item.text}</P>
					))}
				</div>
			))}
			<SmallArrowLink className="teaser__link" href={ data.attributes.button.href }>{ data.attributes.button.label }</SmallArrowLink>
			<Picture className="teaser__image" src={ data.attributes.image.data.attributes.url } alt=''/>
		</Section>
	);

};

// EXPORTS
export {
	Teaser,
};
