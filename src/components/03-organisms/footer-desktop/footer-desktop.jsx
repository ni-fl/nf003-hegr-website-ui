// IMPORTS
import 'components/03-organisms/footer-desktop/footer-desktop.scss';
import Link from 'next/link';

// FOOTER DESKTOP
const FooterDesktop = () => {

	// RENDER
	return (
		<footer className="footer-desktop">
			<div className="footer-desktop__container">
				<address className="footer-desktop__logo logo">
					<Link className="logo__link" href="/">
						<img className="logo__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik"/>
					</Link>
				</address>
				<address className="footer-desktop__connectors connectors">
					<Link className="connectors__item default-link" href="mailto:isabel@hellergrafik.ch">isabel@hellergrafik.ch</Link>
					<Link className="connectors__item default-link" href="tel:0774052349">077 405 23 49</Link>
					<Link className="connectors__item default-link" target="_blank" href="https://www.instagram.com/hellergrafik/">Instagram</Link>
				</address>
				<address className="footer-desktop__links links">
					<Link className="links__item default-link" href="/imprint">Impressum</Link>
					<Link className="links__item default-link" href="/data-privacy">Datenschutz</Link>
					<p className="links__item">©Isabel Heller</p>
				</address>
			</div>
		</footer>
	);

};

// EXPORTS
export {
	FooterDesktop,
};
