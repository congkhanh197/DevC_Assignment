const baseUrl = "https://newsapi.org/v2";
const API_KEY = "eb379170b18843d3a703032cd43e227d";

export const getTopHeadlines = pageNumber => {
  return fetch(
    baseUrl +
      `/top-headlines?country=us&apiKey=${API_KEY}&page=${pageNumber}&pageSize=10`
  );
};

export const getSources = () => {
  return fetch(baseUrl + `/sources?country=us&apiKey=${API_KEY}`);
};
export const getPublisher = (id, pageNumber) => {
  return fetch(
    baseUrl + `/everything?sources=${id}&apiKey=${API_KEY}&page=${pageNumber}`
  );
};

export const getArticleSearch = (text, pageNumber) => {
  const encode = encodeURI(text);
  return fetch(
    baseUrl +
      `/everything?qInTitle=${encode}&language=en&sortBy=relevancy&apiKey=${API_KEY}&page=${pageNumber}&pageSize=50`
  );
};
