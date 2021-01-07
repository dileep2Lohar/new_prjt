import React, { Component } from 'react'

export default class lifting_2 extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.number * 3}</h2>
            </div>
        )
    }
}
