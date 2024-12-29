// IMPORTS
import 'components/03-organisms/footer-mobile/footer-mobile.scss';
import Link from 'next/link';

// FOOTER MOBILE
const FooterMobile = () => {
	
	// RETURN
	return (
		<footer className="footer-mobile">
			<address className="footer-mobile__connectors">
				<Link className="connectors__item default-link" target="_blank" href="mailto:isabel@hellergrafik.ch">isabel@hellergrafik.ch</Link>
				<Link className="connectors__item default-link" href="tel:0774052349">077 405 23 49</Link>
			</address>
			<address className="footer-mobile__links links">
				<div className="links__container">
					<Link className="links__item default-link" target="_blank" href="https://www.instagram.com/hellergrafik/">Instagram</Link>
					<Link className="links__item default-link" href="/data-privacy">Datenschutz</Link>
					<Link className="links__item default-link" href="/imprint">Impressum</Link>
				</div>
				<p className="links__copyright">©Isabel Heller</p>
			</address>
		</footer>
	);
	
};

// EXPORTS
export {
	FooterMobile
};
