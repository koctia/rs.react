const SERVER_URL = 'https://rs-react-api.vercel.app/cats';

export const fetchUrl = async (query: string, endpoint = SERVER_URL) => {
  try {
    query ? (query = `?${query}`) : (query = '');
    const response = await fetch(`${endpoint}${query}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return 'error';
  }
};
