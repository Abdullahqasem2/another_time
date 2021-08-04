import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
const Delete = (props) => {
  const id = props.id;
  const handelSubmit = e => {
        e.preventDefault(props);
        axios.delete('http://localhost:8000/api/users/delete/'+id)
            .then(res=>console.log(res))
            .then(res => navigate('/'))
            .catch(err=>console.log(err))
    }
    const not = () => {
      navigate('/')
    }
  return(
    <div>
    <form onSubmit={handelSubmit} >
      <h4>are you shure you want to Delete {props.name} ?</h4>

      <input type="submit" value="Yes" />
    </form>
    <button onClick={not} value="no" >no</button>
    </div>
  );
};
export default Delete;
