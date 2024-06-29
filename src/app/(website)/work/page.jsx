// IMPORTS
import { Portfolio } from "components/03-organisms/portfolio/portfolio";
import fetchProjects from "queries/fetch-projects.js";
import fetchPortfolio from "queries/fetch-portfolio.js";

// PAGE
const Page = async () => {

	// FETCH PORTFOLIO
	const portfolio = await fetchPortfolio();

	// RENDER
	return (
		<main>
			<Portfolio data={ portfolio } />
		</main>
	);

};

// EXPORTS
export default Page;
