import React, {Component} from 'react';
import Thingy from './thingy';

class Thingies extends Component {

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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

  handleSubmit = thingy => {
      const thingies = [...this.state.thingies];
      const index = thingies.indexOf(thingy);
      thingies[index] = {...thingy};
      thingies[index].badge_value = thingies[index].entered_value;

      this.setState({thingies});
    }

  handleDelete = thingyId => {
      const thingies = this.state.thingies.filter(t => t.id !== thingyId);
      this.setState({thingies: thingies});
  }

  handleChange = thingy => {
      const thingies = [...this.state.thingies];
      const index = thingies.indexOf(thingy);
      thingies[index] = {...thingy};
      thingies[index].entered_value = thingies[index].temp_value;
      this.setState({thingies});
  }

  render () {

    return(
        <React.Fragment>
            { this.state.thingies.map(thingy => (
                <Thingy
                    key={thingy.id}
                    onDelete={this.handleDelete}
                    thingy={thingy}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
            ))}
        </React.Fragment>
    );
  }
}

export default Thingies;