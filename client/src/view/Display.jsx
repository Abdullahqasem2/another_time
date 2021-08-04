import React from 'react';
import { Link } from '@reach/router';
const Display = (props) => {


  return(
    <div>
    {props.user.map((person, idx)=>{return <div key={idx}><p>first name: {person.name}</p><p>last name: {person.lastname}</p><p>age: {person.age}</p> <Link to = {"/show/"+person._id+"/"+person.name} >Edit: {person.name}</Link> <Link to = {"/delete/"+person._id+"/"+person.name} >Delete: {person.name}</Link>  </div>})}
    </div>
  );
};
export default Display;
