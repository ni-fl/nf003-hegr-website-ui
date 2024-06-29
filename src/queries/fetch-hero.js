// FETCH PROJECT
const fetchHero = async () => {

	// SEND REQUEST
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/hero?populate=deep`, {
		next: { revalidate: 60 },
		method: 'GET',
	});

	// PARSE JSON
	const { data } = await res.json();

	// RETURN 
	return data;

};

// EXPORTS
export default fetchHero;