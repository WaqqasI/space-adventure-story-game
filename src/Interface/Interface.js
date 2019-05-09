import React, {Component} from 'react'
import SetName from './Components/SetName.js'
import stateManager from "../gameState/stateManager";

/*const getVisibility = () => {
  return this.state.visible;
}*/

class Interface extends Component {
    constructor(props) {
        super(props)
        this.state.visible = true;
        //getVisibility = getVisibility.bind(this);
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


export default {view: Interface, /*control: getVisibility*/}