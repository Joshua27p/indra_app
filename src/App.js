import React from 'react'
import './scss/app.scss';
import './scss/utils.scss'
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
