import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/main.css";

/// Aqui vamos a exportar todas las vistas y se va renderizar segun la ruta (path).
import Example from './views/example';
import Index from './views/index';

const App: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/example" exact component = {Example} />
      <Route path="/index" exact component = {Index} />
    
    </Switch>

  </BrowserRouter>
 
)

export default App;