import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layouts from "./Components/layouts/Layouts";
import Home from "./Components/pages/home/Home";
import Routes from './Components/route/Routes';

ReactDOM.render(
  <React.StrictMode>
          <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
