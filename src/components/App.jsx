import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
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

  forDelet = id => {
    const actualContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({
      contacts: actualContacts,
      filter: '',
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const name1 = this.state.name;
    const number1 = this.state.number;
    const existingName = this.state.contacts.find(
      value => value.name.toLowerCase() === name1.toLowerCase()
    );
    existingName
      ? alert(`Unfortunately name: ${name1} allready exist in this contacts!`)
      : this.setState({
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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm
          forSubmit={this.handleSubmit}
          nameChange={this.handleNameChange}
          numberChange={this.handleNumberChange}
          valueName={this.state.name}
          valueNumber={this.state.number}
        />

        <h2>Contacts</h2>
        <Filter
          filterChange={this.handleFilterChange}
          valueFilter={this.state.filter}
        />
        <ContactsList
          contactsData={this.state.contacts}
          filter={this.state.filter}
          forDelet={this.forDelet}
        />
      </div>
    );
  }
}
