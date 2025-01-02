// IMPORTS
import 'components/03-organisms/address/address.scss';
import Link from 'next/link';
import { H2, H3 } from 'components/01-atoms/heading/heading.jsx';
import { Section } from 'components/04-layouts/section/section.jsx';

// ADDRESS
const Address = ({ className, data }) => {
	
	// RENDER
	return (
		<Section className={ `${ className } address` }>
			<div className="address__container">
				<div className="address__item">
					<H3 className="address__item-title">{ data?.company?.heading }</H3>
					<div className="address__item-links">
						{ data.company.links.map((link, index) => (
							<span className="address__item-container" key={ index }>
						{ link.href ? (
							<Link className="address__item-link" href={ link.href }>
								<H2 className="address__item-text">{ link.label }</H2>
							</Link>
						) : (
							<H2 className="address__item-text">{ link.label }</H2>
						) }
						</span>
						)) }
					</div>
				</div>
				<div className="address__item">
					<H3 className="address__item-title">{ data?.contact?.heading }</H3>
					<div className="address__item-links">
						{ data.contact.links.map((link, index) => (
							<span className="address__item-container" key={ index }>
						{ link.href ? (
							<Link className="address__item-link" href={ link.href }>
								<H2 className="address__item-text">{ link.label }</H2>
							</Link>
						) : (
							<H2 className="address__item-text">{ link.label }</H2>
						) }
						</span>
						)) }
					</div>
				</div>
				<div className="address__item">
					<H3 className="address__item-title">{ data?.post?.heading }</H3>
					<div className="address__item-links">
						{ data.post.links.map((link, index) => (
							<span className="address__item-container" key={ index }>
						{ link.href ? (
							<Link className="address__item-link" href={ link.href }>
								<H2 className="address__item-text">{ link.label }</H2>
							</Link>
						) : (
							<H2 className="address__item-text">{ link.label }</H2>
						) }
						</span>
						)) }
					</div>
				</div>
				<div className="address__item">
					<H3 className="address__item-title">{ data?.office?.heading }</H3>
					<div className="address__item-links">
						{ data.office.links.map((link, index) => (
							<span className="address__item-container" key={ index }>
						{ link.href ? (
							<Link className="address__item-link" href={ link.href }>
								<H2 className="address__item-text">{ link.label }</H2>
							</Link>
						) : (
							<H2 className="address__item-text">{ link.label }</H2>
						) }
						</span>
						)) }
					</div>
				</div>
			</div>
		</Section>
	);
	
};

// EXPORTS
export {
	Address
};
