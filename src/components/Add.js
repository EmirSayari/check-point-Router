import {Button , Modal , Form} from 'react-bootstrap';
import{useState} from 'react';

export default function Add() {

  // modal manipulation
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  // state adding a new movie 

  const [Title,setTitle]= useState("");
  const [description,setdescription]= useState("");
  const [Image,setImage]= useState("");
  const [Rating,setRating]= useState("");
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add a new MOVIE
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>   
          <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="Type the Movie Title " onChange ={(e)=> setTitle (e.target.value)} />
    <Form.Label>Movie Description</Form.Label>
    <Form.Control type="email" placeholder="A brief Description" onChange ={(e)=> setdescription (e.target.value)} />
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="email" placeholder="Type the Movie Adress " onChange ={(e)=> setImage (e.target.value)}/>
    <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Your Rate Please"onChange ={(e)=> setRating (e.target.value)} />
  </Form.Group>
 
</Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  

