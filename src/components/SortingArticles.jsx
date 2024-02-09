import { useState } from "react";
import SortingForm from "./SortingForm";

const SortingArticles = ({articles,setArticles}) => {

    return (<section className="sorting">
        <h3>Sorting:</h3>
        <SortingForm articles={articles} setArticles={setArticles}/>
    </section>)
}

export default SortingArticles;