// IMPORTS
import { Hero } from 'components/03-organisms/hero/hero.jsx';
import { Intro } from 'components/03-organisms/intro/intro.jsx';
import { Showcase } from 'components/03-organisms/showcase/showcase.jsx';
import fetchHero from 'queries/fetch-hero.js';
import fetchIntro from 'queries/fetch-intro.js';
import fetchShowcase from 'queries/fetch-showcase.js';

// META DESCRIPTION
const metadata = {
	title: 'heller grafik - Grafik für helle Köpfe',
	description: 'Hinter heller grafik steckt eine visuelle Gestalterin aus Luzern mit Passion zu durchdachtem Branding.',
};

// PAGE
const Page = async () => {

	// FETCH HERO 
	const hero = await fetchHero();

	// FETCH INTRO
	const intro = await fetchIntro();

	// FETCH SHOWCASE
	const showcase = await fetchShowcase();

	// RENDER
	return (
		<main>
			<Hero data={ hero } />
			<Intro data={ intro } />
			<Showcase data={ showcase } />
		</main>
	);

};

// EXPORTS
export { metadata };
export default Page;
