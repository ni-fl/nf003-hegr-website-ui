// IMPORTS
import queryString from 'query-string';

// FETCH PROJECTS PAGE
const fetchProjectsPage = async () => {
  
  // DEFINE THE BASE URL
  const baseURL = `${process.env.NEXT_PUBLIC_CMS_URI}/api/projects-page`;

  // DEFINE THE QUERY STRING
  const query = queryString.stringify({
    'populate[metadata][populate]': '*',
    'populate[content][on][section.spacer][populate][populate]': '*',
    'populate[content][on][section.projects][populate][projects][populate][teaser][populate]': '*',
    'populate[content][on][section.projects][populate][projects][populate][impressions][populate]': '*',
    'populate[content][on][section.projects][populate][projects][populate][infos][populate]': '*',
  });

  // DEFINE THE URL
  const url = `${baseURL}?${query}`;

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
export default fetchProjectsPage;
