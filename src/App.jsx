import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';

const App = () => {
  return (
    <Router>
      <NavBar />
      <CartWidget />
      <Switch>
        <Route exact path="/">
          <h1>¡Bienvenido a la página de inicio!</h1>
        </Route>
        <Route exact path="/productos">
          <ItemListContainer />
        </Route>
        <Route path="/productos/:id">
          <ItemDetailContainer />
        </Route>
        <Route path="/acerca-de-nosotros">
          <h1>SOMOS UNA EMPRESA DEDICADA A LA VENTA DE PRODUCTOS DEL MUNDO DEL SKATEBOARDING.</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
