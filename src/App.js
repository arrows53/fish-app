import React, {Component} from 'react';
import Thingies from './components/thingies';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            thingies: [
                {
                    id: 1,
                    entered_value: 'you put stuff here',
                    badge_value: 'hi'
                },
                {
                    id: 2,
                    entered_value: 'you put more stuff here',
                    badge_value: 'heey'
                }]
        }

    }

    // handleAdd ()
    // {
    //     this.handleA
    //
    // }


    render () {
        return(
            <React.Fragment>

                <nav className={"navbar navbar-light bg-light"}>  Thingies!
                    <span className={"badge badge-warning m-2"}>None</span>
                    <button onClick={this.handleAdd} className={"btn btn-light m-2"}>Make More</button>
                </nav>
                <Thingies/>
            </React.Fragment>
        );
    }
}

export default App;