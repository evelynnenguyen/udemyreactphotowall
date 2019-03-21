// import React, {Component} from 'react'
// if you're only using the render method in your class,
// you're allowed to convert your class to a stateless functional component.
import React from 'react';

function Title(props) {
    return (
        <h1> {props.title} </h1>
    )
}

// class Title extends Component {
//     render() {
//         return (
//             <h1> {this.props.title} </h1>
//         )
//     }
// }

export default Title