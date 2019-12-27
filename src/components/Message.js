import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state= {
            message: 'Welcome visitors'
        }
    }
    changeMessage (){
        this.setState({
            message:'Thak you for subscribig'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                    <button onClick ={() => this.changeMessage()}>Subscribe</button>
                </h1>
            </div>
        )
    }
}

export default Message
