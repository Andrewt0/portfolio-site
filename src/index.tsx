import React from 'react';
import ReactDOM from 'react-dom';

import './style/styles.css';

import { Main } from './main/main';



ReactDOM.render(
  <React.StrictMode>
    <Main message="hello world"/>
  </React.StrictMode>,
  document.getElementById('root')
);


