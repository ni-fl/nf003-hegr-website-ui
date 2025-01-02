// IMPORTS
import fetchProjectsPage from 'queries/fetch-projects-page.js';
import { Main } from 'components/05-renderer/main/main.jsx';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH DATA
	const projectsPage = await fetchProjectsPage();

	// RETURN METADATA
	return {
		title: projectsPage?.metadata?.title ? projectsPage?.metadata?.title  : '',
		description: projectsPage?.metadata?.description ? projectsPage?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH DATA
	const projectPages = await fetchProjectsPage();
	
	// RENDER
	return (
		<main>
			<Main content={projectPages?.content}	/>
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
