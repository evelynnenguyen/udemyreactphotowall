// import React, {Component} from 'react'
// if you're only using the render method in your class,
// you're allowed to convert your class to a stateless functional component.

import React from 'react';

function Photo(props) {
    const post = props.post
        return <figure className = "figure">
            {/* the following code show image on screen! */}
            <img className = "photo" src = {post.imageLink} alt = {post.description}/>
            <figcaption><p> {post.description} </p></figcaption>
            <div className = "button-container"> 
                <button className = "button"> Remove </button>    
            </div>
            
        </figure>
}


// class Photo extends Component {
//     render() {
//         const post = this.props.post
//         return <figure className = "figure">
//             {/* the following code show image on screen! */}
//             <img className = "photo" src = {post.imageLink} alt = {post.description}/>
//             <figcaption><p> {post.description} </p></figcaption>
//             <div className = "button-container"> 
//                 <button className = "button"> Remove </button>    
//             </div>
            
//         </figure>
//     }
// }

export default Photo