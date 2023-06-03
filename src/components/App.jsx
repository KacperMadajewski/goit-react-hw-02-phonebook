import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      contacts: [],
      name: '',
    });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
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
          <button type='submit'>Add contact</button>
        </form>
        <ul>
          <li>{this.state.name}</li>
        </ul>
      </div>
    );
  }
}
