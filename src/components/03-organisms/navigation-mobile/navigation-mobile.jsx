'use client';

// IMPORTS
import 'components/03-organisms/navigation-mobile/navigation-mobile.scss';
import { Hamburger } from "components/01-atoms/hamburger/hamburger";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

// NAVIGATION MOBILE
const NavigationMobile = ({ className }) => {

	// SETUP STATE
	const [ isOpen, setIsOpen ] = useState( false );

	// SETUP REFS
	const navigationMobileRef = useRef( null );
	const menuTimelineRef = useRef( null );

	// HANDLE TOGGLE
	const handleToggle = () => {
		if ( !isOpen ) menuTimelineRef.current.play();
		if ( isOpen ) menuTimelineRef.current.reverse();
		setIsOpen( (value) => ( !value ) )
	};

	// ANIMATE MENU
	useEffect( () => {

		// CREATE ANIMATION
		const context = gsap.context( () => {
			menuTimelineRef.current = gsap.timeline( { paused: true } );
			menuTimelineRef.current.to( '.menu', { height: '152px', boxShadow: '8px 16px 16px 8px #f5f5f5' , duration: 0.1 } );
			menuTimelineRef.current.to( '.list__item', { right: '0%', stagger: 0.15, duration: 0.3 } );
		}, navigationMobileRef );

		// RESTORE ANIMATION
		return () => context.revert();

	}, [] );

	// RENDER
	return (
		<nav className={ `${ className } navigation-mobile` } ref={ navigationMobileRef }>
			<div className="navigation-mobile__bar bar">
				<Link className="bar__logo-link" href="/">
					<img className="bar__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik"/>
				</Link>
				<Hamburger onClick={ handleToggle } open={ isOpen }/>
			</div>
			<div className="navigation-mobile__placeholder"></div>
			<div className="navigation-mobile__menu menu" onClick={ handleToggle }>
				<ul className="menu__list list">
					<li className="list__item">
						<Link className="list__item-link default-link" href="/lang/de/pages/work.php">Arbeiten</Link>
					</li>
					<li className="list__item">
						<Link className="list__item-link default-link" href="/lang/de/pages/info.php">Info</Link>
					</li>
					<li className="list__item">
						<Link className="list__item-link default-link" href="/lang/de/pages/contact.php">Kontakt</Link>
					</li>
				</ul>
			</div>
		</nav>
	);

};

// EXPORTS
export {
	NavigationMobile
};
