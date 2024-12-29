// IMPORTS
import 'components/03-organisms/data-privacy/data-privacy.scss';
import { Section } from 'components/04-layouts/section/section';
import { H1, H3 } from 'components/01-atoms/heading/heading';
import { RT } from 'components/01-atoms/rich-text/rich-text.jsx';

// LEGAL
const DataPrivacy = ({ data }) => {
	
	// RENDER
	return (
		<Section className="data-privacy">
			<div className="data-privacy__article">
				<H1 className="data-privacy__article-heading" lookLike="h1">{ data.heading }</H1>
				<div className="data-privacy__article-info-list">
					{ data.infos.map((info) => (
						<div className="data-privacy__article-info-block" key={ info.id }>
							<H3 className="data-privacy__article-info-subheading" level="h3">{ info?.subheading }</H3>
							<RT className="data-privacy__article-text">{ info?.text }</RT>
						</div>
					)) }
				</div>
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	DataPrivacy
};
