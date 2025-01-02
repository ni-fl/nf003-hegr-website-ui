// IMPORTS
import { Main} from 'components/05-renderer/main/main.jsx';
import fetchDataPrivacyPage from 'queries/fetch-data-privacy-page.js';
import fetchImprintPage from 'queries/fetch-imprint-page.js';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const dataPrivacyPage = await fetchDataPrivacyPage();

	// RETURN METADATA
	return {
		title: dataPrivacyPage?.metadata?.title ? dataPrivacyPage?.metadata?.title  : '',
		description: dataPrivacyPage.metadata?.description ? dataPrivacyPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH DATA PRIVACY
	const dataPrivacyPage = await fetchDataPrivacyPage();
	
	// RENDER
	return (
		<main>
			<Main content={dataPrivacyPage.content} />
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
