import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'

class Main extends Component {
    // this is to update the state of UI
    constructor(){
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://cdn.images.express.co.uk/img/dynamic/80/590x/Wilsthorp-UFO-854745.jpg"
                }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }],
            //to switch between the page putting url and page displaying photos
                screen: 'photos'
        }
        // clarifying "this" to use it in the removePhoto
        this.removePhoto = this.removePhoto.bind(this)
        this.navigate = this.navigate.bind(this)
    }

    // This function will pass the command remove to a specific photo after we click "Remove" button
    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        // in order to use "this", we need to clarify it in the constructor
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }

    // cannot define setState() inside render() function bc setState() changes the state of the app
    // and that cause a change in the state called the render() function again => causing infinite loop and app crash
    
    // after all elements of the page is rendered correctly, componentDidMount method is called
    // to fetching elements from a database, make sure it is inside the componentDidMount
    componentDidMount() {
    }

    // this get called whenever the component is re-rendered
    componentDidUpdate(prevProps, prevState) {
        // alert('re-render')
        console.log(prevState.posts)
        console.log(this.state)
    }

    render () {
        return <div>
        {
            this.state.screen == 'photos' && (
            <div>
                <Title title = {'PhotoWall'}/>
                {/* install prop-types */}
                <PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate}/>
            </div>
            )
        }

        {
            this.state.screen == 'addPhoto' && (
            <div>
                <AddPhoto/>
            </div>
            )
        }
        </div>
    }
}

export default Main

// this is an array of posts
// const posts = [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//     "3919321_1443393332_n.jpg"
//     }, {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://cdn.images.express.co.uk/img/dynamic/80/590x/Wilsthorp-UFO-854745.jpg"
//     }, {
//     id: "2",
//     description: "On a vacation!",
//     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//     }]


// function SimulateFetchFromDatabase() {
//     return [{
//         id: "0",
//         description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
//         }, {
//         id: "1",
//         description: "Aliens???",
//         imageLink: "https://cdn.images.express.co.uk/img/dynamic/80/590x/Wilsthorp-UFO-854745.jpg"
//         }, {
//         id: "2",
//         description: "On a vacation!",
//         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//         }]
// }

// componentDidMount() {
//     // const posts = SimulateFetchFromDatabase()
//     // this.setState({
//     //     posts: posts
//     // })
// }