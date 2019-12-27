import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JavaTpoint from './components/JavaTpoint'
import Hello from './components/Hello'
import Message from './components/Message'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Greet />
//         <Welcome />
//         <JavaTpoint/>
//       </div>
//     );
//   }


// }
class App extends React.Component {
  constructor (){
    super();
    this.state={
      data:
      [
        {
          "name":"Abhishek"
        },
        {
          "name":"Saharsh"
        },
        {
          "name":"Ajay"
        }
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <Hello/>
        <Greet  />
          <Greet name="Bruce" heroName ="superman">
            <p>This is children props</p>
            </Greet>
          <Greet name="Clark" heroName ="batsman"/>
          <button>Action</button>
          <Greet name="Diana" heroName="Worder Woman" />
        <Welcome name="Bruce" heroName ="superman" />
        <Welcome name="Clark" heroName ="batsman" />
        <Welcome name="Diana" heroName="Worder Woman"/>
        <JavaTpoint/>
        <StudentName/>
        <Message/>
        
        <ul>
          {this.state.data.map((item)=> <List data={item}/>)}
        </ul>
      </div>
    );
  }
}
class StudentName extends React.Component {
  render() {
    return (
       <div>
         <h1>Student Name Details</h1>
       </div>
    );
  }
}
class List extends React.Component {
  render() {
    return (
       <ul>
         <li>{this.props.data.name}</li>
       </ul>
    );
  }
}


export default App;
