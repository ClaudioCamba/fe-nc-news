import axios from "axios";

export const getArticles = (searchParams) => {
    return axios.get('https://nc-news-qvgz.onrender.com/api/articles/')
    .then((response)=>{
        return response.data;
    })
}