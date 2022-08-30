import React from 'react';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
