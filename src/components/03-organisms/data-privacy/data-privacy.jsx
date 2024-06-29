// IMPORTS
import 'components/03-organisms/data-privacy/data-privacy.scss';
import { Section } from "components/04-layouts/section/section";
import { Article } from "components/04-layouts/article/article";
import { H1, H3 } from "components/01-atoms/heading/heading";
import { MD } from "components/01-atoms/markdown/markdown";
import { P } from "components/01-atoms/text/text";
import { LI } from 'components/01-atoms/list-item/list-item';

// LEGAL
const DataPrivacy = () => {

	// RENDER
	return (
		<Section className="data-privacy">
			<Article className="data-privacy__article article">
				<H1 className="article__heading" lookLike="h1">Datenschutzerklärung</H1>
				<P className="article__text">Diese Datenschutzerklärung beinhaltet allgemeinen Angaben zum Umgang von heller grafik mit Ihren Daten sowie Informationen über Ihre Rechte gemäss der Europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).</P>
				<div className="article__details details">
					<div className="details__item item">
						<H3 className="item__subheading" level="h3">Name und Anschrift des für die Datenverarbeitung Verantwortlichen</H3>
						<P className="item__text">Isabel Heller</P>
						<P className="item__text">Zähringerstrasse 13</P>
						<P className="item__text">6003 Luzern</P>
					</div>
					<div className="details__item item">
						<H3 className="item__subheading" level="h3">Datenschutzgesetz</H3>
						<P className="item__text">Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutz-rechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben. In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.</P>
					</div>
					<div className="details__item item">
						<H3 className="item__subheading" level="h3">Allgemeines zur Datenverarbeitung</H3>
						<P className="item__text">Der Schutz Ihrer Daten ist uns wichtig. Wir respektieren Ihre Privatsphäre und setzen uns dafür ein, dass Ihre Daten gemäß den geltenden Gesetzen bearbeitet werden. Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten der betroffenen Person erfolgt nur nach und mit Ihrer Einwilligung. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist. Mit der vorliegenden Datenschutzerklärung informieren wir Sie umfassend über unsere Datenbearbeitungen.</P>
					</div>
					<div className="details__item item">
						<H3 className="item__subheading" level="h3">Bearbeitung von Personaldaten</H3>
						<P className="item__text">Unter Bearbeitung von Personendaten fallen z.B. die</P>
						<LI className="item__list-item">Erhebun aksdf jöas alsfkjasfdljafasdlöfjas fasdölasdkfj öajsk jöasdj jasö jd</LI>
					</div>
				</div>
			</Article>
		</Section>
	);

};

// EXPORTS
export {
	DataPrivacy,
};
