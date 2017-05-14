import React, { Component } from 'react';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      errors: {}
    }
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateNameChange = this.validateNameChange.bind(this);
  }

  handleItemChange(event) {
    // make sure there are no empty fields before we change our state!
    this.validateNameChange(event.target.value)
    // update the `name` property of the state with event.target.value
    this.setState({ name: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    if (
      this.validateNameChange(this.state.name)
    ) {
      // construct payload
      let itemPayload = {
        name: this.state.name
      }

      // pass payload to addItem function (modifies state on parent component)
      // it is props because the `addItem` function comes from the parent component
      // the function modifies state of the parent component - which also manages the ItemsList component
      this.props.addItem(itemPayload)

      // clear the form on submission, which could be made into its own function
      this.setState({ name: '' })
    }
  }

  // AAHHHHH, this method looks CRAY! Be calm. Take it line by line
  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { nameError: 'Item name must not be blank.' }
      // object.assign simply creates a new object/hash, with our new error inside of it!
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      // remove our name error from the errors in state, and return true
      let errorState = this.state.errors
      delete errorState.nameError
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;

    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}

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
