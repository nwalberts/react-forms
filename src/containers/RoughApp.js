import React, { Component } from 'react';
import ItemsList from '../components/ItemsList';
import TextField from '../components/TextField';

class RoughApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: ''
    }
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

    handleItemChange(event) {
      this.setState({ name: event.target.value })
    }

    handleFormSubmit(event) {
      event.preventDefault()

      let itemPayload = {
        name: this.state.name
      }

      this.props.addItem(itemPayload)
      this.setState({ name: '' })
    }

  addItem(itemPayload) {
    this.setState({ items: this.state.items.concat(itemPayload) })
  }

  render() {
    return (
          <form className="callout" onSubmit={this.handleFormSubmit}>
            <input
              type='text'
              name='consumed'
              value={this.state.name}
              onChange={this.handleItemChange}
            />
            <input className="button" type="submit" value="Submit" />
          </form>

          <ItemsList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
