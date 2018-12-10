import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './component/Header'
import PatronForm from './component/PatronForm'


function App() {
  return(
    <div className="main-container">
      <Header />
      <PatronForm />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
