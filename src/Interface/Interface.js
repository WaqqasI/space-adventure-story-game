<<<<<<< HEAD
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
=======
import React, {Component} from 'react'
import SetName from './Components/SetName.js'
import stateManager from "../gameState/stateManager";

const getVisibility = () => {
  return this.state.visible;
}

class Interface extends Component {
    constructor(props) {
        super(props)
        this.state.visible = true;
        getVisibility = getVisibility.bind(this);
    }

    startPlaying() {
        stateManager.changeState(1);
    }
  
    render() {
        return (
            <SetName visible={this.state.visible} onclick={this.startPlaying}/>
        )
    }
}


console.log(getVisibility)

export default {view: Interface, /*control: getVisibility*/}
>>>>>>> d8c1d634ea673605b7310d1d9c34bb14b03ca86a
