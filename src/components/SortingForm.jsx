import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';

function SortingForm({articles,setArticles}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState('created_at');
    const [order, setOrder] = useState('desc');

    // const sortingAsc = (a, b) => {
    //     if (a[options] < b[options]) {
    //       return -1;
    //     }
    //     if (a[options] > b[options]) {
    //       return 1;
    //     }
    //     return 0;
    // }
    
    // const sortingDesc = (a, b) => {
    //     if (a[options] < b[options]) {
    //       return 1;
    //     }
    //     if (a[options] > b[options]) {
    //       return -1;
    //     }
    //     return 0;
    // }

    // const handleSortingSelect = (option,order) => {
    //     if (order === 'asc') { 
    //         setArticles([...articles.sort(sortingAsc)]);
    //     } else if (order === 'desc') {
    //         setArticles([...articles.sort(sortingDesc)]);
    //     }
    // }

    // useEffect(() =>{
    //     handleSortingSelect(options, order);
    // },[options,order])
    useEffect(() =>{
      
      // setSearchParams({sort_by : options, order: order });
    },[options,order])

    function handleSubmit(event) {
      event.preventDefault();
      console.log(searchParams.get('topic'))
      // The serialize function here would be responsible for
      // creating an object of { key: value } pairs from the
      // fields in the form that make up the query.
      // let params = serializeFormQuery(event.target);
      // console.log(params)
      // setSearchParams(params);
    }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
      <Form.Label htmlFor="sort-options">Options:</Form.Label>
          <Form.Select id="sort-options" value={options} onChange={(event)=>{setOptions(event.target.value)}}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </Form.Select>
          </fieldset>
          <fieldset>
          <Form.Label htmlFor="sort-order">Order:</Form.Label>
          <Form.Select id="sort-order" value={order} onChange={(event)=>{setOrder(event.target.value)}}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </Form.Select>
      </fieldset>
      <button>Submit</button>
    </Form>
  );
}

export default SortingForm;