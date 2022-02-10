import React from 'react';
import './style.css';
import { BrowserRoute as Router, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import { Ejercicios } from './data/Ejercicios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Navegacion />
      {Ejercicios.map((item) => {
        <Route
          key={item.id}
          path={item.path}
          exact
          component={item.component}
        />;
      })}
    </Router>
  );
}
