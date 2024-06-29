// IMPORTS
import 'components/03-organisms/founder/founder.scss';
import { Section } from "components/04-layouts/section/section";
import { H1, H2, H3 } from 'components/01-atoms/heading/heading';
import { P } from 'components/01-atoms/text/text';
import { Article } from "components/04-layouts/article/article";
import { Picture } from "components/02-molecules/picture/picture.jsx";
import { Table, TR, TD } from 'components/01-atoms/table/table.jsx';

// FOUNDER
const Founder = () => {

	// RENDER
	return (
		<Section className="founder">
			<Picture className="founder__image" src='/images/placeholder.png' alt="heller grafik" priority={ true }/>
			<Article className="founder__article article">
				<H1 className="article__heading" level="h1">Isabel Heller <br/> Visuelle Gestalterin</H1>
				<P className="article__text">Ich bin eine neugierige Weltenbummlerin mit Affinität zu Design, gutem Essen und spannenden Büchern. In meinem Berufsalltag sowie in meiner Freizeit schaue ich über den Tellerrand hinaus und mag es, mich mit Neuem auseinanderzusetzen.</P>
				<div className="articles__detail detail">
					<H3 className="item__subheading" level="h3">Aus- und Weiterbildungen</H3>
					<Table className="item__table table">
						<TR className=" table__row">
							<TD className="table__cell text">2018 – 2019</TD>
							<TD className="table__cell text">Lehrgang Digital Experience Design, SfG Aargau </TD>
						</TR>
						<TR className=" table__row">
							<TD className="table__cell text">2014 - 2016</TD>
							<TD className="table__cell text">Typografische Gestalterin EFA, SfG Bern und Biel</TD>
						</TR>
						<TR className=" table__row">
							<TD className="table__cell text"></TD>
							<TD className="table__cell text"></TD>
						</TR>
						<TR className=" table__row">
							<TD className="table__cell text">2013 – 2014 </TD>
							<TD className="table__cell text">Tagesklasse «Sehen und Gestalten», Gestaltungsschule Farbmühle, Luzern </TD>
						</TR>
						<TR className="table__row">
							<TD className="table__cell text">2008</TD>
							<TD className="table__cell text">Polygrafin EFZ</TD>
						</TR>
					</Table>
				</div>
			</Article>
		</Section>
	);

};

// EXPORTS
export {
	Founder,
};
