import React from 'react';
import Header from '../src/components/Header';
import Navigator from '../src/components/Navigator';
import Router from '../src/components/Router';
import { BrowserRouter } from 'react-router-dom';
import '../src/sass/_app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navigator/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;