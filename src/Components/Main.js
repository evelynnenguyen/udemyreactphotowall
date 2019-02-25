import React, {Component} from 'react'
import List from './List'
import Title from './Title'

class Main extends Component {
    render () {
        return <div>
            <Title title = {'toDos'}/>
            <List tasks = {['pick up John', 'do homework']}/>
            <List tasks = {['finish udemy lesson', 'study machine learning']}/>
        </div>
    }
}

export default Main