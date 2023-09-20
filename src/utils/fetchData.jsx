

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bac3ed4106msh7f5d30c56380f65p17ac56jsn1e7ba3ef17d8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
