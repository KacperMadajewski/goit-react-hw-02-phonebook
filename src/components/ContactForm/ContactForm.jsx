import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    contact: [],
    name: '',
  };

  handleNameChange = ev => {
    this.setState({ name: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state.contact);
    this.setState({
      contact: [...this.state.contact, this.state.name],
      name: '',
    });
    console.log(this.state.contact);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          <li>{this.state.contact}</li>
        </ul>
      </div>
    );
  }
}
