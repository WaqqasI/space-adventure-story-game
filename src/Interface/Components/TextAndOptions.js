import React, {Component} from 'react';
import '../../main.css'

class TextAndOptions extends Component {
    render() {
        return (
            <div className={'information'} style={{display: this.props.visible ? "block" : "none"}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis, delectus? Assumenda dolorum
                    ipsa mollitia, officiis ratione temporibus! Accusantium blanditiis consequatur dolore dolores
                    laborum omnis, voluptatem? Ab ea minus velit!
                </p>
            </div>
        );
    }
}

export default TextAndOptions;