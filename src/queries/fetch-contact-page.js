// IMPORTS
import queryString from 'query-string';

// FETCH PROJECTS
const fetchContactPage = async () => {

// DEFINE THE BASE URL
	const baseURL = `${ process.env.NEXT_PUBLIC_CMS_URI }/api/contact-page`;

// DEFINE THE QUERY STRING
	const query = queryString.stringify({
			'populate[metadata][populate]': '*',
			'populate[content][on][section.hero-image][populate]': '*',
			'populate[content][on][section.address][populate][company][populate]': '*',
			'populate[content][on][section.address][populate][contact][populate]': '*',
			'populate[content][on][section.address][populate][post][populate]': '*',
			'populate[content][on][section.address][populate][office][populate]': '*',
			'populate[content][on][section.spacer][populate]': '*'
		}
	);

// DEFINE THE URL
	const url = `${ baseURL }?${ query }`;
	
	// SEND REQUEST
	const res = await fetch(url, {
		next: { revalidate: process.env.NEXT_PUBLIC_REVALIDATION_TIME },
		method: 'GET'
	});
	
	// PARSE JSON
	const { data } = await res.json();
	
	// RETURN
	return data;
	
};

// EXPORTS
export default fetchContactPage;
