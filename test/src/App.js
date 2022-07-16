import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import React from "react";
import LoginForm from "./components/Login/loginForm/loginForm"
import AddClient from "./components/addClinet/addFom/addClientForm"
import CategorieForm from "./components/addCategorie/addCategorieForm/addCategorieForm";

function App() {
  return (
    
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/">
              <Redirect to="/Connexion" />
            </Route>
            <Route exact path="/Connexion">
              <LoginForm  />
            </Route>
            <Route exact path="/Addclient">
              <AddClient />
            </Route>
            <Route exact path="/Addcategorie">
              <CategorieForm />
            </Route>
            </Switch>
            </Router>
            </div>
            );}
            export default App;