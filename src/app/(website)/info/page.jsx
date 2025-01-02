// IMPORTS
import { Main } from 'components/05-renderer/main/main.jsx';
import fetchInfoPage from 'queries/fetch-info-page.js';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const infoPage = await fetchInfoPage();

	// RETURN METADATA
	return {
		title: infoPage?.metadata?.title ? infoPage?.metadata?.title  : '',
		description: infoPage?.metadata?.description ? infoPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH DATA
	const infoPage = await fetchInfoPage();
	
	// RENDER
	return (
		<Main content={infoPage?.content} />
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
