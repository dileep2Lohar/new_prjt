import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listary from './list';
import List_obj from './list_object'
import Key from './key'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <Listary /> */}
    {/* <List_obj /> */}
    <Key />
  </React.StrictMode>,
  document.getElementById('root')
);

