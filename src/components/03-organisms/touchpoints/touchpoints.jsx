// IMPORTS
import 'components/03-organisms/touchpoints/touchpoints.scss';
import { Section } from 'components/04-layouts/section/section';
import { P } from 'components/01-atoms/text/text';
import { H3 } from 'components/01-atoms/heading/heading.jsx';
import Link from 'next/link';
import Image from 'next/image';

// TOUCHPOINTS
const TouchPoints = ({ data }) => {
	
	// RENDER
	return (
		<Section className="touchpoints">
			<div className="touchpoints__address-list">
				<div className="touchpoints__address-item">
					{ data?.general?.links?.map((link) => (
						<P className="touchpoints__address-item-text text--big" key={ link.key }>{ link.label }</P>
					)) }
				</div>
				<div className="touchpoints__address-item">
					{ data?.contact?.links?.map((link) => (
						link.href && <Link className="touchpoints__block-item-text text--big" href={ link.href } key={ link.id }>{ link.label }</Link>
					)) }
				</div>
				<div className="touchpoints__address-item">
					<H3 className="touchpoints__address-item-heading">{ data?.post?.heading }</H3>
					{ data?.post.links?.map((link) => (
						<P className="touchpoints__block-item text--big" key={ link.id }>{ link.label }</P>
					)) }
				</div>
				<div className="touchpoints__address-item">
					<H3 className="touchpoints__address-item-heading">{ data?.office?.heading }</H3>
					{ data?.office.links?.map((link) => (
						<P className="touchpoints__address-item-text text--big" link={ link.id }>{ link?.label }</P>
					)) }
				</div>
			</div>
			<div className="touchpoints__image-list">
				{ data?.images.map((image) => (
					<Image className="touchpoints__image-item" src={ image.image.url } width="2500" height="1300" alt="heller grafik" key={ image.id }/>
				)) }
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	TouchPoints
};
