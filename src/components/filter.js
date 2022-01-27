import React from 'react'
import Rate from './Rating';
import {InputGroup,FormControl} from 'react-bootstrap'
function filter() {
    return (
        <div className="filter">
        <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="Search what you need by Name"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>   
        <Rate />
        </div>
    )
}

export default filter
