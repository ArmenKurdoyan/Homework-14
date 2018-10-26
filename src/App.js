import React, { Component } from 'react';
import Header from './Components/header/Header';
import BitcoinRate from './Components/footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isBcRateVisible: false,
      };

      this.showBcRate = this.showBcRate.bind(this)

  }

  showBcRate() {
      this.setState({
          isBcRateVisible: !this.state.isBcRateVisible
      });
  }

  changeBtnTxt() {
      return this.state.isBcRateVisible ?
          "Hide Bitcoin rate" :
          "Show Bitcoin rate";
  }

  render() {
      return (
          <div className="App">
              <h1>Rate calculator</h1>
              <Header/>
              <button
                  onClick={this.showBcRate}
                  className="App-show-hide"
                  type="button">
                  {this.changeBtnTxt()}
              </button>
              {this.state.isBcRateVisible && <BitcoinRate/>}
          </div>
      );
  }
}

export default App;
