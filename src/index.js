import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <Card image={"https://robohash.org/test?200x200"} urName={"Jane Doe"} email={"jane.doe@gmail.com"}/>
      <Card image={"https://robohash.org/test1?200x200"} urName={"Michael Smith"} email={"michael.smith@gmail.com"}/>
      <Card image={"https://robohash.org/test2?200x200"} urName={"Samuel Smith"} email={"samuel.smith@gmail.com"}/> */}
      <Card image={robots[0].image} urName={robots[0].name} email={robots[0].email}/>
      <Card image={robots[1].image} urName={robots[1].name} email={robots[1].email}/>
      <Card image={robots[2].image} urName={robots[2].name} email={robots[2].email}/>
      <Card image={robots[3].image} urName={robots[3].name} email={robots[3].email}/>
      <Card image={robots[4].image} urName={robots[4].name} email={robots[4].email}/>
      <Card image={robots[5].image} urName={robots[5].name} email={robots[5].email}/>
      <Card image={robots[6].image} urName={robots[6].name} email={robots[6].email}/>
      <Card image={robots[7].image} urName={robots[7].name} email={robots[7].email}/>
      <Card image={robots[8].image} urName={robots[8].name} email={robots[8].email}/>
      <Card image={robots[9].image} urName={robots[9].name} email={robots[9].email}/>
      <Card image={robots[1].image} urName={robots[1].name} email={robots[1].email}/>
      <Card image={robots[2].image} urName={robots[2].name} email={robots[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
