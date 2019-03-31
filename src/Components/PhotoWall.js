// the photo component will receive all the posts that will be paste in

// if you're only using the render method in your class,
// you're allowed to convert your class to a stateless functional component.

import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
// anchor tag, href attribute => allow to create hyperlink between pages

// The export value of this file is going to be a stateless
// function, not a class.

function PhotoWall(props) {
    return <div>
        <a className = "addIcon" onClick = {props.onNavigate} href = "#AddPhoto"></a>
        {/* <button onClick = {props.onNavigate} className = "addIcon"> </button> */}
        <div className = "photoGrid" >
            {props.posts.map((post, index) => <Photo key = {index} post = {post} onRemovePhoto ={props.onRemovePhoto}/>)}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall

// class PhotoWall extends Component {
//     render() {
//         return <div className = "photoGrid" >
//             {this.props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}
//         </div>
//     }
// }