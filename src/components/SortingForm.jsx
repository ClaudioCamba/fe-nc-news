import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function SortingForm({articles,setArticles}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState(searchParams.get('sort_by') || 'created_at');
    const [topic, setTopic] = useState(searchParams.get('topic') || '');
    const [orderValue, setOrderValue] = useState('desc');

    const radios = [
      { name: 'Asc', value: 'asc' },
      { name: 'Desc', value: 'desc' },
    ];
    
    // useEffect(() =>{
    //     handleSortingSelect(options, order);
    // },[options,order])


    function handleSubmit(event) {
      event.preventDefault();
        setSearchParams({ topic: topic, sort_by: options, order: orderValue });
        // setSearchParams({sort_by : options, order: order });
   
      // console.log(searchParams.get('topic'))
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
          <ButtonGroup id="sort-order">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                name="radio"
                value={radio.value}
                checked={orderValue === radio.value}
                onChange={(e) => setOrderValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          
          {/* <Form.Select id="sort-order" value={order} onChange={(event)=>{setOrder(event.target.value)}}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </Form.Select> */}
      </fieldset>
      <Button as="input" type="submit" value="Submit" variant="outline-primary"/>
    </Form>
  );
}

export default SortingForm;