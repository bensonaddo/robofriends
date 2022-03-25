import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewApp from './NewApp';
import Header from './header';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <h1>This is dope</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <h1>This is dope</h1>
    <NewApp />
  </React.StrictMode>,
  document.getElementById('new-root')
);

ReactDOM.render(
  <React.StrictMode>
    <Header greeting={"Hello My new WebApp"} />
  </React.StrictMode>,
  document.getElementById('new-root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
