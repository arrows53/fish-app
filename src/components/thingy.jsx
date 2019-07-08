import React, { Component } from 'react';

class Thingy extends Component {

    //
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

  //   //according to react docs, gotta use event.target.value.  but I can't
  //   //get this to travel up to the parent class
  //   handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleChange(value)  {
        //this is dirty, but I can't seem to get 'target.value' to work
        //via props
        this.props.thingy.temp_value = value.target.value;
        this.props.onChange(this.props.thingy);
        this.props.thingy.temp_value = null;

  }



  render () {
    return(
        <React.Fragment>
            <div
                className={"badge-dark m-5"}
                style={{display: 'inline-block'}}
            >
          <span
                className={"badge badge-warning m-2"}
            >
              {this.props.thingy.badge_value}
          </span>
          <button
              className={"btn btn-sm btn-primary m-2"}
                onClick={() => this.props.onSubmit(this.props.thingy)}
          >Hey
          </button>
          <input
                type="text"
                value={this.props.thingy.entered_value}
                className={"badge-light m-2"}
                onChange={this.handleChange}
          />
          <button
                className={"btn btn-danger m-2"}
                onClick={() => this.props.onDelete(this.props.thingy.id)}
                >Ciao
          </button>
          </div>

        </React.Fragment>)
  }

}

export default Thingy;

