'use client';

// IMPORTS
import 'components/03-organisms/navigation-desktop/navigation-desktop.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation.js';


// NAVIGATION DESKTOP
const NavigationDesktop = () => {
	
	// GET PATHNAME
	const pathname = usePathname();
	
	// RENDER
	return (
		<nav className="navigation-desktop">
			<div className="navigation-desktop__bar">
				<div className="navigation-desktop__container">
					<Link className="navigation-desktop__logo-link" href="/">
						<img className="navigation-desktop__logo" src="/logos/heller-grafik/full.svg" alt="heller grafik"/>
					</Link>
					<Link className={ `navigation-desktop__navigation-item link-navigation default-link ${ pathname === '/projects' ? 'navigation-desktop__navigation-item--active' : '' }` } href="/projects">Projekte</Link>
					<Link className={ `navigation-desktop__navigation-item link-navigation default-link ${ pathname === '/info' ? 'navigation-desktop__navigation-item--active' : '' }` } href="/info">Info</Link>
					<Link className={ `navigation-desktop__navigation-item link-navigation default-link ${ pathname === '/contact' ? 'navigation-desktop__navigation-item--active' : '' }` } href="/contact">Kontakt</Link>
				</div>
			</div>
			<div className="navigation-desktop__placeholder"></div>
		</nav>
	);
	
};

// EXPORTS
export {
	NavigationDesktop
};
