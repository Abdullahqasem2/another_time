import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
  const [User, setUser] = useState("");
  const [UserL, setUserL] = useState("");
  const [UserA, setUserA] = useState("");
  const [Errors, setErrors] = useState([]);
  const handelSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            name:User,
            lastname:UserL,
            age:UserA
        })
            .then(res=>console.log(res))
            .catch(err=>{
                const errorResponse = err.response.data;
                const errorArr = [];
                console.log(errorResponse);
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    // console.log("this is errors",Errors);
  return(
    <form onSubmit={handelSubmit} >
    {Errors.map((item,i)=>{return <p key={i}>{item}</p>})}
      <p>
        <label>first Name</label>
        <input type="text" onChange={e => {setUser(e.target.value)}}/>
      </p>
      <p>
        <label>last Name</label>
        <input type="text" onChange={e => {setUserL(e.target.value)}}/>
      </p>
      <p>
        <label>age</label>
        <input type="number" onChange={e => {setUserA(e.target.value)}}/>
      </p>
      <input type="submit" value="create" />
    </form>
  );

};
export default Form;
