import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

//Pages//
import Home from './pages/Home';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App(){

  return(
    <>
    <Router>
        <Navbar />
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/menu' component = {Menu} />
        <Route path='/contactus' component = {ContactUs} />
        <Route path='/aboutus' component = {AboutUs} />
      </Switch>
    </Router>
    </>
  );
}

export default App;