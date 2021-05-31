import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import "./css/main.css";

/// Aqui vamos a exportar todas las vistas y se va renderizar segun la ruta (path).
import Example from './views/example';

const App: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/example" exact component = {Example} />
    
    </Switch>

  </BrowserRouter>
 
)

export default App;