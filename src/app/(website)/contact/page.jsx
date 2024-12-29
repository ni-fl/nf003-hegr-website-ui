// PAGE
import { Main } from 'components/03-organisms/main/main.jsx';
import fetchContactPage from 'queries/fetch-contact-page.js';
import fetchProjectsPage from 'queries/fetch-projects-page.js';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const contactPage = await fetchContactPage();

	// RETURN METADATA
	return {
		title: contactPage?.metadata?.title ? contactPage?.metadata?.title  : '',
		description: contactPage?.metadata?.description ? contactPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH TOUCH-POINTS
	const contactPage = await fetchContactPage();
	
	// RENDER
	return (
		<main>
			<Main content={ contactPage?.content }/>
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
