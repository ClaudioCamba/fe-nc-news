import axios from "axios";

export const getArticles = ({article_id=null,query=null}) => {

    let endpointString = 'https://nc-news-qvgz.onrender.com/api/articles';
    if (article_id) endpointString += '/'+article_id;

    if (query?.size > 0){
        endpointString += `?`;
        const queryArr = [];
        if (query.get('topic')) queryArr.push(`topic=${query.get('topic')}`);
        if (query.get('sort_by')) queryArr.push(`sort_by=${query.get('sort_by')}`);
        if (query.get('order')) queryArr.push(`order=${query.get('order')}`);
        endpointString += queryArr.join('&');
    } 
  
    return axios.get(endpointString)
    .then((response)=>{
        return response.data;
    })
}

export const getTopics = () => {
    return axios.get('https://nc-news-qvgz.onrender.com/api/topics/')
    .then((response)=>{
        return response.data;
    })
}

export const getComments = (article_id) => {
    return axios.get(`https://nc-news-qvgz.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data;
    })
}

export const patchVotes = (article_id,action) => {
    const update = action === 'upvote' ? { inc_votes :  +1 } : { inc_votes :  -1 };
    return axios.patch(`
    https://nc-news-qvgz.onrender.com/api/articles/${article_id}`,update)
    .then((response)=>{
        return response.data;
    })
}

export const postComment = (article_id,body) => {
    return axios.post(`
    https://nc-news-qvgz.onrender.com/api/articles/${article_id}/comments`, body)
    .then((response)=>{
        return response.data;
    })
}

export const deleteComment = (commentId) => {
    return axios.delete(`
    https://nc-news-qvgz.onrender.com/api/comments/${commentId}`)
    .then((response)=>{
        return response.data;
    })
}