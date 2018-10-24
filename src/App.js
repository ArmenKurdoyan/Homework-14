import React, { Component } from 'react';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
