import React, { Component } from 'react';
import Styles from './ContactsForm.module.css';
import PropTypes from 'prop-types';

export class ContactsForm extends Component {
  render() {
    const { forSubmit, onChange, valueName, valueNumber } = this.props;
    return (
      <form onSubmit={forSubmit} className={Styles.form}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={valueName}
          placeholder="Write Your name"
          className={Styles.input}
        />
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          value={valueNumber}
          placeholder="Write Your number"
          className={Styles.input}
        />
        <button type="submit" className={Styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  forSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  valueName: PropTypes.string,
  valueNumber: PropTypes.string,
};
