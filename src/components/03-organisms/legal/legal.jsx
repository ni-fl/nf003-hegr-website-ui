// IMPORTS
import 'components/03-organisms/legal/legal.scss';
import { Section } from "components/04-layouts/section/section";
import { Article } from "components/04-layouts/article/article";
import { H1, H3 } from "components/01-atoms/heading/heading";
import { MD } from "components/01-atoms/markdown/markdown";
import { P } from "components/01-atoms/text/text";

// LEGAL
const Legal = () => {

	// RENDER
	return (
		<Section className="legal">
			<Article className="legal__article article">
				<H1 className="article__heading" lookLike="h1">Impressum</H1>
				<div className="article__details details">
					<div className="details__item item">
						<H3 className={ "item__subheading" } level="h3">Anschrift</H3>
						<P className={ "item__text" }>Isabel Heller</P>
						<P className={ "item__text" }>Zähringerstrasse 13</P>
						<P className={ "item__text" }>6003 Luzern</P>
					</div>
					<div className="details__item item">
						<H3 className={ "item__subheading" } level="h3">Kontaktadresse</H3>
						<P className={ "item__text" }>isabel@hellergrafik.ch</P>
						<P className={ "item__text" }>077 405 23 49</P>
						<P className={ "item__text" }>isabel@hellergrafik.ch</P>
					</div>
					<div className="details__item item">
						<H3 className={ "item__subheading" } level="h3">Umsetzung</H3>
						<P className={ "item__text" }>Jérôme Haas</P>
						<P className={ "item__text" }>Bodenmatte 16a</P>
						<P className={ "item__text" }>hello@jeromehaas.ch</P>
					</div>
				</div>
			</Article>
		</Section>
	);

};

// EXPORTS
export {
	Legal,
};
