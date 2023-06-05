import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault();
    
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
        <ContactsForm />
      </div>
    );
  }
}
