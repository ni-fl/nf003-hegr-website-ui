// FETCH SHOWCASE
const fetchShowcase = async () => {

	// SEND REQUEST
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/showcase?populate=deep`, {
		next: { revalidate: 60 },
		method: 'GET',
	});

	// PARSE JSON
	const { data } = await res.json();

	// RETURN 
	return data;

};

// EXPORTS
export default fetchShowcase;