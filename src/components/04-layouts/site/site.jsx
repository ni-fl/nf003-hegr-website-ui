// IMPORTS
import 'components/04-layouts/site/site.scss';
import { NavigationMobile } from 'components/03-organisms/navigation-mobile/navigation-mobile';
import { NavigationDesktop } from 'components/03-organisms/navigation-desktop/navigation-desktop';
import { FooterDesktop } from 'components/03-organisms/footer-desktop/footer-desktop';
import { FooterMobile } from 'components/03-organisms/footer-mobile/footer-mobile';

// SITE
const Site = ({ children }) => {
	
	// RENDER
	return (
		<div className="site">
			<div className="site__inner">
				<NavigationMobile/>
				<NavigationDesktop/>
				<div className="site__content">
					{ children }
				</div>
				<FooterDesktop/>
				<FooterMobile/>
			</div>
		</div>
	);
	
};

// EXPORTS
export {
	Site
};
