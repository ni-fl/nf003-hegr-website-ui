// IMPORTS
import 'components/03-organisms/touchpoints/touchpoints.scss';
import { Section } from "components/04-layouts/section/section";
import { ContactInfos } from "components/02-molecules/contact-infos/contact-infos";
import { Picture } from "components/02-molecules/picture/picture";
import { P } from "components/01-atoms/text/text";
import Link from "next/link";

// TOUCHPOINTS
const TouchPoints = ({ data }) => {

	// RENDER
	return (
		<Section className="touchpoints">
			<address className="touchpoints__address address">
				<P className="address__item text--big">{ data.attributes.company.text }</P>
				<P className="address__item text--big">{ data.attributes.name.text }</P>
				<P className="address__item text--big">{ data.attributes.street.text }</P>
				<P className="address__item text--big">{ data.attributes.town.text }</P>
			</address>
			<div className="touchpoints__contact contact">
				<Link className="contact__item-link" href={ data.attributes.email.href }>
					<P className="contact__item text--big">{ data.attributes.email.label }</P>
				</Link>
				<Link className="contact__item-link" href={ data.attributes.phone.href }>
					<P className="contact__item text--big">{ data.attributes.phone.label }</P>
				</Link>
			</div>
			{ data.attributes.images.data.map((item) => (
				<Picture className="touchpoints__image" src={ item.attributes.url } alt=''/>
			)) }
		</Section>
	);

};

// EXPORTS
export {
	TouchPoints,
};
