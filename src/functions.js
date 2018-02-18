export function getTopHeadlines() {
  return fetch('https://newsapi.org/v2/top-headlines?language=en&country=us', {
    method:'get',
    headers: {
      'X-Api-Key': '<your api-key>',
      'Content-Type': 'application/x-www-form-urlencoded'
    }});
}

export function getSearchResult(text) {
  const sort = "publishedAt";
  const language = "en";
  const uri = "https://newsapi.org/v2/everything?q="+text+"&language="+language+"&sortBy="+sort;
  return fetch(uri, {
    method:'get',
    headers: {
      'X-Api-Key': '<your api-key>',
      'Content-Type': 'application/x-www-form-urlencoded'
    }});

}
