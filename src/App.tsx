import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Values} from "../src/api/agents";
import { IValue } from './interfaces/IValue';

let App = () => {

  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
  /*axios.get("https://localhost:5001/api/value/list", {
  }).then((response)=>console.log(response))*/
  Values.list()
  .then((response: any)=>
  {
    let vals : IValue[] = [];
    vals = response;
    console.log(vals)
;  });

  Values.details(2)
  .then((response: any)=>console.log(response))

});

  return (
    <div className="App">
     App
    </div>
  );
}

export default App;
