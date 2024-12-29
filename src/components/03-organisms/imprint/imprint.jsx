// IMPORTS
import 'components/03-organisms/imprint/imprint.scss';
import { Section } from 'components/04-layouts/section/section';
import { H1, H3 } from 'components/01-atoms/heading/heading';
import { P } from 'components/01-atoms/text/text';
import Link from 'next/link';

// LEGAL
const Imprint = ({ data }) => {
	
	// RENDER
	return (
		<Section className="imprint">
			<div className="imprint__article">
				<H1 className="imprint__article-heading" lookLike="h1">Impressum</H1>
				<div className="imprint__article-info-list">
					{ data?.addresses?.map((address) => (
						<div className="imprint__article-info-block" key={ address.id }>
							<H3 className="imprint__article-info-subheading">{ address?.heading }</H3>
							{ address.links.map((link) => (
								link.href !== null ? (
									<Link className="imprint__article-info-link" href={ link.href } key={ link.id }>
										<P className="imprint__article-info-text">{ link.label }</P>
									</Link>
								) : (
									<P className="imprint__article-info-text" key={ link.id }>{ link.label }</P>
								)
							)) }
						</div>
					)) }
				</div>
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Imprint
};
