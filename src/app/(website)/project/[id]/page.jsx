// PAGE
import { ProjectDetail } from "components/03-organisms/project-detail/project-detail.jsx";
import fetchProject from "queries/fetch-project";

// PAGE
const Page = async ({ params }) => {

	// GET PROJECT ID
	const { id } = params;

	// FETCH PROJECT
	const project = await fetchProject({ id: id });

	// RENDER
	return (
		<main>
			<ProjectDetail data={ project } />
		</main>
	);

};

// EXPORTS
export default Page;
