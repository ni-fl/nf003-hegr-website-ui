// IMPORTS
import fetchMain from 'queries/fetch-main.js';
import { Main } from 'components/03-organisms/main/main.jsx';

// GENERATE METADATA
const generateMetadata = async () => {

	// FETCH PROJECT
	const main = await fetchMain();

	// RETURN METADATA
	return {
		key: 'heller grafik',
		title: main?.metadata?.title ?  main?.metadata?.title  : '',
		description: main.metadata.description ? main?.metadata?.description : '',
	};

};

// PAGE
const Page = async () => {
	
	// FETCH TEASER
	const main = await fetchMain();
	
	// RENDER
	return (
		<main>
			<Main content={ main.content }/>
		</main>
	);
	
};

// EXPORTS
export { generateMetadata };
export default Page;
