import React, {Component} from 'react';
import Thingies from './components/thingies';

class TopBar extends Component {

    render () {
        return(
            <React.Fragment>
                <div className={"badge-primary m-2"}>  Thingies!
                    <span className={"badge badge-warning m-2"}>None</span>
                    <button className={"btn btn-light m-2"}>Make More</button>
                </div>
                <Thingies/>
            </React.Fragment>
        );
    }
}

export default TopBar;