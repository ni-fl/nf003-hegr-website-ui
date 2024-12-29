// IMPORTS
import 'components/03-organisms/responsibility/responsibility.scss';
import { Section } from 'components/04-layouts/section/section';
import { H3 } from 'components/01-atoms/heading/heading.jsx';
import { RT } from 'components/01-atoms/rich-text/rich-text.jsx';

// RESPONSIBILITIES
const Responsibility = ({ data }) => {
	
	// RENDER
	return (
		<Section className="responsibility">
			<div className="responsibility__cards">
				<div className="responsibility__card">
					<H3 className="responsibility__card-title">{ data.services.heading }</H3>
					<div className="responsibility__card-list">
						<RT className="responsibility__card-item">{ data.services.text }</RT>
					</div>
				</div>
				<div className="responsibility__card">
					<H3 className="responsibility__card-title">{ data.values.heading }</H3>
					<div className="responsibility__card-list">
						<RT className="responsibility__card-item">{ data.values.text }</RT>
					</div>
				</div>
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Responsibility
};
