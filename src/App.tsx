import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
//import "./css/styleLandinpage.css";
//import "./css/main.css";
//import './css/vendor/bootstrap/css/bootstrap.min.css';
//import 'lib/font-awesome/css/font-awesome.min.css';
import LandingPageView from "./views/LandingPage";
import Login from "./views/login";
import SingIN from "./views/singin";
import Customer  from "./views/AppCustomer"
import Chauffeur  from "./views/AppChauffeur"
import Manager  from "./views/AppManager"

const App:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/myapp" exact component = {LandingPageView}/>
      <Route path="/Login" exact component = {Login}/>
      <Route path="/SingIN" exact component = {SingIN}/>
      <Route path="/appCustomer" exact component = {Customer}/>
      <Route path="/appManager" exact component = {Manager}/>
      <Route path="/appDriver" exact component = {Chauffeur}/>
    </Switch>
  </BrowserRouter>
)
export default App;
