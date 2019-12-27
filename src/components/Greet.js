import React,{ Component} from 'react'
import { func } from 'prop-types'
import App from '../App'


// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

 const Greet=props=>{
     console.log(props)
  return(
  <div>
    <h1>
        Hello {props.name} a.k.a {props.heroName}
    </h1>
    {props.children}
  </div> 
  )
 }
 export default Greet;