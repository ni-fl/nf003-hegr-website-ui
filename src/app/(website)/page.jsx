// IMPORTS
import fetchStartPage from 'queries/fetch-start-page.js';
import { Main } from 'components/05-renderer/main/main.jsx';


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
