// IMPORTS
import queryString from 'query-string';

// FETCH PROJECT PAGE
const fetchProjectPage = async ({ id }) => {
  
  // DEFINE THE BASE URL
  const baseURL = `${ process.env.NEXT_PUBLIC_CMS_URI }/api/projects/${ id }`;
  
  // DEFINE THE QUERY STRING
  const query = queryString.stringify({
    'populate[teaser][populate]': '*',
    'populate[logo][populate]': '*',
    'populate[infos][populate]': '*',
    'populate[impressions][populate]': '*',
    'populate[project]': '*',
  });
  
  // DEFINE THE URL
  const url = `${ baseURL }?${ query }`;
  
  // SEND REQUEST
  const res = await fetch(url, {
    next: { revalidate: process.env.NEXT_PUBLIC_REVALIDATION_TIME },
    method: 'GET',
  });
  
  // PARSE JSON
  const { data } = await res.json();
  
  // RETURN
  return data;
  
};

// EXPORTS
export default fetchProjectPage;
