import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";


import { createBrowserHistory } from "history";
import AdminLayout from "./deshbord/layouts/Admin/Admin";

import "./deshbord/assets/scss/black-dashboard-react.scss";
import "./deshbord/assets/demo/demo.css";
import "./deshbord/assets/css/nucleo-icons.css";
import './app.css'






import Home from "./views/OuterPages/Home";
import Register from "./views/OuterPages/Register";
import Login from './views/OuterPages/LoginPage'
import TermsAndCondition from './views/OuterPages/TermsAndCondition'

const App = ()=>{
  return(
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" render={props => <AdminLayout {...props} />} />
      <Route path="/home" render={props => <Home {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
      <Route path="/terms" render={props => <TermsAndCondition {...props} />} />

      

      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
  )
}


export default App