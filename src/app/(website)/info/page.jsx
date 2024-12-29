// IMPORTS
import { Teaser } from 'components/03-organisms/teaser/teaser.jsx';
import { About } from 'components/03-organisms/about/about';
import { Responsibility } from 'components/03-organisms/responsibility/responsibility.jsx';
import fetchInfoPage from 'queries/fetch-info-page.js';
import { Main } from 'components/03-organisms/main/main.jsx';
import fetchStartPage from 'queries/fetch-start-page.js';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const infoPage = await fetchInfoPage();

	// RETURN METADATA
	return {
		title: infoPage?.metadata?.title ? infoPage?.metadata?.title  : '',
		description: infoPage.metadata?.description ? infoPage?.metadata?.description : '',
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
