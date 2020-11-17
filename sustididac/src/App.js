import React from 'react';
import './App.css';
import {
  
BrowserRouter as Router,
Switch,
Route,
Link
}  from "react-router-dom";
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Acerca from './Componentes/Acerca';


export default function App() {
  return (
    <Router>
      <div class="header">
      <div class="login-box">
      <div class="contenedor">
        
        
          <ul>
            <div class="item1" align="center"><Link to="/iniciosesion">Iniciar Sesion</Link></div>
            <div class="item2" align="center"><Link to="/registro">Registrarse</Link></div>
            <div class="item3" align="center"><Link to="/acercade">Acerca De</Link></div>
            <div align="center"></div>
          </ul>
      
      <hr/>
      <Switch>
        <Route path="/iniciosesion">
          <Login/>
        </Route>
        <Route path="/registro">
          <Registro/>
        </Route>
        <Route path="/acercade">
          <Acerca/>
        </Route>
      </Switch>
      </div>
      </div>
      </div>
    </Router>
  );
  }