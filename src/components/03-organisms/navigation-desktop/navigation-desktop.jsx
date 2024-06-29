'use client';

// IMPORTS
import 'components/03-organisms/navigation-desktop/navigation-desktop.scss';
import Link from "next/link";

// NAVIGATION DESKTOP
const NavigationDesktop = () => {

	// RENDER
	return (
		<nav className="navigation-desktop">
			<div className="navigation-desktop__bar">
				<div className="navigation-desktop__container">
					<Link className="navigation-desktop__logo-link" href="/">
						<img className="navigation-desktop__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik"/>
					</Link>
					<Link className="navigation-desktop__navigation-item link-navigation default-link" href="/work">Arbeiten</Link>
					<Link className="navigation-desktop__navigation-item link-navigation default-link" href="/info">Info</Link>
					<Link className="navigation-desktop__navigation-item link-navigation default-link" href="/contact">Kontakt</Link>
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
