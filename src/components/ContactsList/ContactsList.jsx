import React, { Component } from "react";
import { nanoid } from "nanoid";

export class ContactsList extends Component {


    render() {
        const { contactsData, filter} = this.props;
        return (
          <ul>
            {contactsData
              .filter(contact =>
                contact.name
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              )
              .map(contact => (
                <li key={nanoid()}>
                  {contact.name}: {contact.number}
                </li>
              ))}
          </ul>
        );
    }
}