import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props)
        this.state={
color:"green"
        }
    }
  render() {
    return (
      <div>
        {
            <h1>{this.state.color}</h1>
        }
      </div>
    )
  }
}
