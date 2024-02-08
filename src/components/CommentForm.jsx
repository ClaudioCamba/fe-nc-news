import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CommentForm({handlePostComment,feedback, setFeedback,disableForm,setDisableForm}) {
  const [validated, setValidated] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;


    if (form.checkValidity() === false) {
      event.stopPropagation();
      if (commentValue === "") setFeedback({body:'Please write a comment before pressing the comment button', class:'invalid'})
    } else {
        setDisableForm(true)
        handlePostComment(commentValue);
        setCommentValue("");
    }
    
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="comment-form">
        <Form.Group controlId="exampleForm.ControlTextarea1" className="group-form">
          <Form.Label>Add a comment</Form.Label>
        <Form.Control 
            as="textarea" 
            rows={1}
            required
            type="text"
            placeholder="Great article!"
            value={commentValue}
            onChange={(event)=>{setCommentValue(event.target.value)}}
        />
        <p className={`form-feedback `+ feedback.class}><span>{feedback.body}</span></p>
        </Form.Group>
      <Button disabled={disableForm} type="submit">Comment</Button>
    </Form>
  );
}

export default CommentForm;