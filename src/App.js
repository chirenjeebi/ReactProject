import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JavaTpoint from './components/JavaTpoint'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <JavaTpoint/>
      </div>
    );
  }


}


export default App;
