import Form from './components/Form';
import Test from './components/Test';
import Display from './view/Display';
import Delete from './components/Delete';
import axios from 'axios';
import './App.css';
import {Router} from '@reach/router';
import React, {useState,useEffect} from 'react';

function App() {
  const [asd, setasd] = useState([]);
  useEffect(()=>{
        axios.get('http://localhost:8000/api/users/')
            .then(res=>{setasd(res.data.users)
            });
    })
  return (
    <div className="App">
      <Form />
      <Display user={asd} />
      <Router>
      <Test path="/show/:id/:name" />
      <Delete path="/delete/:id/:name" />
      </Router>
    </div>
  );
}

export default App;
