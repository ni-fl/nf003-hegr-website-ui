// IMPORTS
import { Main} from 'components/03-organisms/main/main.jsx';
import { Imprint } from 'components/03-organisms/imprint/imprint';
import fetchImprintPage from 'queries/fetch-imprint-page.js';
import fetchContactPage from 'queries/fetch-contact-page.js';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const imprintPage = await fetchImprintPage();

	// RETURN METADATA
	return {
		title: imprintPage?.metadata?.title ? imprintPage?.metadata?.title  : '',
		description: imprintPage.metadata?.description ? imprintPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH LEGAL
	const imprintPage = await fetchImprintPage();
	
	// RENDER
	return (
		<main>
			<Main content={ imprintPage.content }/>
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
