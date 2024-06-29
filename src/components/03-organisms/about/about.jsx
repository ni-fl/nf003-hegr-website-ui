// IMPORTS
import 'components/03-organisms/about/about.scss';
import { Section } from "components/04-layouts/section/section";
import { H3 } from "components/01-atoms/heading/heading";
import { P } from 'components/01-atoms/text/text'

// ABOUT
const About = ({  data }) => {

	// RENDER
	return (
		<Section className="about">
			<div className="about__cards cards">
			<div className="cards__item item">
				<H3 className="item__heading" level="h3">{ data.attributes.values.heading }</H3>
				<ul className="item__list list">
				{ data.attributes.services.list.map((item) => (
					<P className="list__item text--big">{ item.text }</P>
				))}
				</ul>
			</div>
			<div className="about__item item">
				<H3 className="item__heading" level="h3">{ data.attributes.services.heading }</H3>
				<ul className="item__list list">
					{ data.attributes.values.list.map((item) => (
						<P className="list__item text--big">{ item.text }</P>
					))}				
				</ul>
			</div>
			</div>
		</Section>
	);

};

// EXPORTS
export {
	About,
};
