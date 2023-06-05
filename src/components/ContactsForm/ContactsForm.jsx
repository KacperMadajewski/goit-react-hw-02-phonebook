import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class ContactsForm extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = ev => {
    this.setState({ name: ev.target.value });
  };

  handleNumberChange = ev => {
    this.setState({ number: ev.target.value });
  };

  handleFilterChange = ev => {
    this.setState({ filter: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const name1 = this.state.name;
    const number1 = this.state.number;
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: name1, number: number1, id: nanoid() },
      ],
      name: '',
      number: '',
    });
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
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleNumberChange}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
        <span>Finde contacts by name</span>
        <input
          type="text"
          name="filter"
          onChange={this.handleFilterChange}
          value={this.state.filter}
        />
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(contact => (
              <li key={nanoid()}>
                {contact.name}: {contact.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
