import React, { Component } from 'react';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleItemChange(event) {
    // update the `name` property of the state with event.target.value
    this.setState({ name: event.target.value })

    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
  }

  handleFormSubmit(event) {
    event.preventDefault() // by default, forms try to make an HTTP request, we want to prevent that, since we are handling it in react

    console.log(this) // whenever using `this`, we need to bind it to this specific instance of the `FormContainer` object

    // construct payload
    let itemPayload = {
      name: this.state.name
    }

    // pass payload to addItem function (modifies state on parent component)
    // it is props because the `addItem` function comes from the parent component
    // the function modifies state of the parent component - which also manages the ItemsList component
    this.props.addItem(itemPayload)

    // clear the form on submission
    this.setState({ name: '' })
  }

  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.name}
          label='Item'
          handlerFunction={this.handleItemChange}
        />
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default FormContainer;
