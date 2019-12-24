import React, {Component} from 'react'

class JavaTpoint extends Component {
    render() {
        var myStyle={
            fontSize:80,
            fontFamily:'Courier',
            color:'#003300'
        }
        var i=5;

        return(
            <div style={myStyle}>
                <h1 className="Hello">JavaTpoint</h1>
                <h2>Training Institutes</h2>
                <p style={myStyle}>THis website containes the best CS tutorials.</p>
                <p data-demoAttribute="demo">This website containes the best cs tutorials</p>
                <h1 className="hello">{34+50}</h1>
                <h1>{i==1? 'True!':'False'}</h1>
            </div>
        );
    }
}
export default JavaTpoint;