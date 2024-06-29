// FETCH PROJECTS
const fetchProjects = async () => {

	// SEND REQUEST
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/projects?populate=deep`, {
		next: { revalidate: 60 },
		method: 'GET',
	});

	// PARSE JSON
	const { data } = await res.json();

	// RETURN 
	return data;

};

// EXPORTS
export default fetchProjects;