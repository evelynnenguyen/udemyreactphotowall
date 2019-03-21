// the photo component will receive all the posts that will be paste in

// import React, {Component} from 'react'
// if you're only using the render method in your class,
// you're allowed to convert your class to a stateless functional component.

import React from 'react';
import Photo from './Photo';

// The export value of this file is going to be a stateless
// function, not a class.

function PhotoWall(props) {
    return <div className = "photoGrid" >
        {props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}
    </div>
}

// class PhotoWall extends Component {
//     render() {
//         return <div className = "photoGrid" >
//             {this.props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}
//         </div>
//     }
// }

export default PhotoWall