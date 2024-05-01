import { useState } from "react";
import SortingForm from "./SortingForm";
import { useSearchParams } from 'react-router-dom';

const SortingArticles = ({articles,setArticles}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (<section className="sorting">
        <h3>Sorting:</h3>
        <SortingForm articles={articles} setArticles={setArticles}/>
    </section>)
}

export default SortingArticles;