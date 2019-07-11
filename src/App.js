import React, {Component} from 'react';
import Thingy from './components/thingy';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            thingies: [
                {
                    id: 1,
                    entered_value: 'you put stuff here',
                    badge_value: 'hi',
                    type: 'textBox',
                },
                {
                    id: 2,
                    entered_value: 'you put more stuff here',
                    badge_value: 'heey',
                    type: 'graphic',
                }],
            id_count:2
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
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

  handleAdd = componentType => thingy =>  {
        const thingies = [...this.state.thingies];
        let id_count = [this.state.id_count][0];
        id_count = id_count + 1;
        thingies.push({ id:id_count,
                        entered_value:'type type type!',
                        badge_value:'hey',
                        type:componentType});

        this.setState({thingies});
        this.setState({id_count});
    }

  render () {

    return(
        <React.Fragment>
            <nav className={"navbar navbar-light bg-light"}>  Thingies!
                <button
                    onClick={this.handleAdd('textBox')}
                    className={"btn btn-light m-2"}
                    type={'textBox'}
                >Make Thingy</button>
                <button
                    onClick={this.handleAdd('graphic')}
                    className={"btn btn-light m-2"}
                    type={'graphic'}
                >Make Canvas</button>
            </nav>
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

export default App;