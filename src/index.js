import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';
import Card from './components/Card.js';
import Data from './Data.js';

const Result = Data.map(item => <Card key={item.id} {...item} />)
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    {Result}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
