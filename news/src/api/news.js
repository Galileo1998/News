const { API_HOST } = require("../utils/constants");

export function getNewsApi() 
{
    const url = `${API_HOST}/api/news?_sort=created_at:DESC&_limit=100`;
    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    })

}