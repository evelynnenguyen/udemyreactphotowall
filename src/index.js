import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'

// no space between BrowserRouter and Main tags
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
