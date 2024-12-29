// IMPORTS
import fetchProjectsPage from 'queries/fetch-projects-page.js';
import { Portfolio } from 'components/03-organisms/portfolio/portfolio';
import { Main } from 'components/03-organisms/main/main.jsx';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const projectsPage = await fetchProjectsPage();

	// RETURN METADATA
	return {
		title: projectsPage?.metadata?.title ? projectsPage?.metadata?.title  : '',
		description: projectsPage.metadata?.description ? projectsPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH DATA
	const projectPages = await fetchProjectsPage();
	
	// RENDER
	return (
		<main>
			<Main content={projectPages.content}	/>
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
