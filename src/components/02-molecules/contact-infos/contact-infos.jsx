// IMPORTS
import 'components/02-molecules/contact-infos/contact-infos.scss';
import { P } from "components/01-atoms/text/text";
import Link from "next/link";

// CONTACT INFOS
const ContactInfos = ({ className }) => {

	// RENDER
	return (
		<div className={ `${ className } contact-infos` }>
			<address className="contact-infos__address address">
				<P className="address__item text--big">heller grafik</P>
				<P className="address__item text--big">Isabel Heller</P>
				<P className="address__item text--big">Zähringerstrasse 13</P>
				<P className="address__item text--big">6003 Luzern</P>
			</address>
			<div className="contact-infos__contact contact">
				<Link className="contact__item-link" href="mailto:isabel@hellergrafik.ch">
					<P className="contact__item text--big">isabel@hellergrafik.ch</P>
				</Link>
				<Link className="contact__item-link" href="tel:0774052349">
					<P className="contact__item text--big">077 405 23 49</P>
				</Link>
			</div>
		</div>
	)

};

// EXPORTS
export {
	ContactInfos,
};
