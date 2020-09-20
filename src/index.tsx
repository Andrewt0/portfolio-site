import React from 'react';
import ReactDOM from 'react-dom';

import './style/styles.css';

import { Main } from './main/main';
import { NavBar } from './shared/navbar/navbar';
import data from './shared/navbar/navcontents.json'


ReactDOM.render(
  <React.StrictMode>
    <Main message="hello world"/>
    <NavBar contents={data.contents}/>
  </React.StrictMode>,
  document.getElementById('root')
);


