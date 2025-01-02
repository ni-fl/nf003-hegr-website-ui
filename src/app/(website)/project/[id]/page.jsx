// PAGE
import { ProjectDetail } from 'components/03-organisms/project-detail/project-detail.jsx';
import { Main } from 'components/05-renderer/main/main.jsx';
import { Project } from 'components/03-organisms/project/project.jsx';
import fetchProjectPage from 'queries/fetch-project-page.js';

// GENERATE METADATA
const generateMetadata = async ({ params }) => {
	
	// GET PROJECT ID
	const { id } = params;
	
	// FETCH PROJECT
	const projectPage = await fetchProjectPage({ id: id });

	// RETURN METADATA
	return {
		title: projectPage?.heading ?  `heller grafik - Projekt: ${projectPage?.heading}` : '',
		description: '',
	};

};

// PAGE
const Page = async ({ params }) => {
	
	// GET PROJECT ID
	const { id } = params;
	
	// FETCH PROJECT
	const projectPage = await fetchProjectPage({ id: id });
	
	// RENDER
	return (
		<main>
			<Project content={ projectPage } />
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
