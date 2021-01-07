import React, { Component } from 'react'
import Lifting_1 from './lifting_1'
import Lifting_2 from './lifting_2'

// another file is lifting_1.jsx

export default class Lifting extends Component {
    state = {
        name : "dileep",
        value : 20
    }
    render() {
        return (
            <div>
                <Lifting_1 name={this.state.name} />
                <Lifting_2 number={this.state.value} />
            </div>
        )
    }
}
