import React from 'react'
import './scss/app.scss';
import './scss/utils.scss'
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
