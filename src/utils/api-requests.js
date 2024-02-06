import axios from "axios";

export const getArticles = (searchParams) => {
    let endpointString = 'https://nc-news-qvgz.onrender.com/api/articles/';
    if (searchParams) endpointString += searchParams;

    return axios.get(endpointString)
    .then((response)=>{
        return response.data;
    })
}

export const getComments = (searchParams) => {
    return axios.get(`https://nc-news-qvgz.onrender.com/api/articles/${searchParams}/comments`)
    .then((response)=>{
        return response.data;
    })
}