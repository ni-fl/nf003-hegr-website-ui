// IMPORTS
import 'components/03-organisms/cards/cards.scss';
import { H2, H3 } from 'components/01-atoms/heading/heading.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';

// CARDS
const Cards = ({ className, data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } cards` }>
			<div className="cards__container">
				{ data.cards.map((card, index) => (
					<div className="cards__card" key={ index }>
						<H3 className="cards__card-title">{ card.heading }</H3>
						<div className="cards__card-list">
							{ card.values.map((value, index) => (
								<H2 className="cards__card-value" key={ index }>{ value.text }</H2>
							)) }
						</div>
					</div>
				)) }
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Cards
};
