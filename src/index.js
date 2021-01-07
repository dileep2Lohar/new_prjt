import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listary from './list';
import List_obj from './list_object'
import Key from './key'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Form from './Form'
import Text from './Textarea';
import NewForm from './Cform';
import FormSubmit from './FormSubmit'
import Ref from './Ref'
import Callback from "./CallBackRef";
import RefFunt from './refFunct'
import Lifting from "./lifting";


ReactDOM.render(
  <React.StrictMode>
    {/* <Listary /> */}
    {/* <List_obj /> */}
    {/* <Key /> */}
    {/* <Form /> */}
    {/* <Text /> */}
    {/* <NewForm /> */}
    {/* <FormSubmit /> */}
    {/* <Ref /> */}
    {/* <Callback /> */}
    {/* <RefFunt /> */}
    <Lifting />
  </React.StrictMode>,
  document.getElementById('root')
);

