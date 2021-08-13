import React from 'react';

import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Header from './components/Header';

import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid">

      <Router>

      <Header/>

      
        <Switch>
          <Route exact path="/">
            <Inicio/>

          </Route>
          <Route exact path="/Blog">
            <Blog />


          </Route >
          <Route exact path="/Formulario">
            <Formulario />

          </Route>
        </Switch>
      </Router>

     

    </div>
  );
}

export default App;
