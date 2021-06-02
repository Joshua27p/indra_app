import React from 'react'
import './scss/app.scss';
import './scss/utils.scss'
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Coverage from './pages/Coverage';
import ThankYouPage from './pages/Ty-page';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route  exact path="/coverage">
              <Coverage />
            </Route>
            <Route exact path="/thankyou">
              <ThankYouPage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
