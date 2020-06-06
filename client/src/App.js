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
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import SellerProfileViewer from './deshbord/views/SellerProfileViewer'

const App = ()=>{
  return(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/admin" render={props => <AdminLayout {...props} />} /> */}
      <ProtectedRoute path="/admin" component={AdminLayout} />} />
      <ProtectedRoute path="/seller/sellerProfile" component={SellerProfileViewer} />} />
      <PublicRoute path="/home" component={Home} />} />
      <PublicRoute path="/login" component={Login} />} />
      <PublicRoute path="/register" component={Register} />} />
      <PublicRoute path="/terms" component={TermsAndCondition} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
  )
}


export default App