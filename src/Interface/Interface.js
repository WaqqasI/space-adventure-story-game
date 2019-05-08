import React, {Component} from 'react'
import SetName from './Components/SetName.js'

class Interface extends Component {
    constructor(props) {
        super(props)
        this.visible = true;
    }

    render() {
        return (
            <SetName visible={this.visible} onclick={this.props.onclick}/>
        )
    }
}


export default Interface