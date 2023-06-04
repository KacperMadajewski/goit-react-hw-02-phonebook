import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

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
        <ContactForm />
      </div>
    );
  }
}
