// PAGE
import { TouchPoints } from "components/03-organisms/touchpoints/touchpoints.jsx";
import fetchTouchpoints from "queries/fetch-touchpoints";

// PAGE
const Page = async () => {

	// FETCH TOUCHPOINTS
	const touchpoints = await fetchTouchpoints();

	// RENDER
	return (
		<main>
			<TouchPoints data={ touchpoints } />
		</main>
	);

};

// EXPORTS
export default Page;
