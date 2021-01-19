import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App/App';

const router = <BrowserRouter basename='/underrated'><App /></BrowserRouter>

ReactDOM.render(
 router,
  document.getElementById('root')
);