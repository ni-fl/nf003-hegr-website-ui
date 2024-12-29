// IMPORTS
import { Hero } from 'components/03-organisms/hero/hero.jsx';
import { Showcase } from 'components/03-organisms/showcase/showcase.jsx';
import fetchStartPage from 'queries/fetch-start-page.js';
import { Main } from 'components/03-organisms/main/main.jsx';


// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const startPage = await fetchStartPage();

	// RETURN METADATA
	return {
		title: startPage?.metadata?.title ? startPage?.metadata?.title  : '',
		description: startPage.metadata?.description ? startPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH DATA
	const startPage = await fetchStartPage();
	
	// RENDER
	return (
		<main>
			<Main content={ startPage?.content } />
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
