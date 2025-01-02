// IMPORTS
import queryString from 'query-string';

// FETCH INFO PAGE
const fetchInfoPage = async () => {
  
  // DEFINE THE BASE URL
  const baseURL = `${process.env.NEXT_PUBLIC_CMS_URI}/api/info-page`;

  // DEFINE THE QUERY STRING
  const query = queryString.stringify({
    'populate[metadata][populate]': '*',
    'populate[content][on][section.hero-image][populate]': '*',
    'populate[content][on][section.intro][populate]': '*',
    'populate[content][on][section.projects][populate][projects][populate][teaser][populate]': '*',
    'populate[content][on][section.spacer][populate]': '*',
    'populate[content][on][section.cards][populate][cards][populate]': '*',
    'populate[content][on][section.team][populate][team][populate][image][populate]': '*',
    'populate[content][on][section.team][populate][team][populate][infos][populate]': '*'
  });

  // DEFINE THE URL
  const url = `${baseURL}?${query}`;

  // SEND REQUEST
  const res = await fetch(url, {
    next: { revalidate: process.env.NEXT_PUBLIC_REVALIDATION_TIME },
    method: 'GET'
  });

  console.log(res);
  // PARSE JSON
  const { data } = await res.json();

  // RETURN
  return data;
};

// EXPORTS
export default fetchInfoPage;
