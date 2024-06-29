// IMPORTS
import { Teaser } from 'components/03-organisms/teaser/teaser.jsx';
import { About } from "components/03-organisms/about/about";
import fetchTeaser from 'queries/fetch-teaser';
import fetchAbout from 'queries/fetch-about';

// PAGE
const Page = async () => {

	// FETCH TEASER
	const teaser = await fetchTeaser();

	// FETCH ABOUT 
	const about = await fetchAbout();

	// RENDER
	return (
		<main>
			<Teaser data={ teaser } />
			<About data={ about } />
		</main>
	);

};

// EXPORTS
export default Page;
