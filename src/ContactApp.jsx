import React from 'react';
import ContactList from './ContactList';
import { getData } from './data';
 
export default class ContactApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: getData()
    };
    this.onDelete = this.onDelete.bind(this)
  }

  onDelete(id) {
    const contacts = this.state.contacts.filter(c => c.id !== id);
    this.setState({contacts});
  }

 
  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDelete} />
      </div>
    )
  };
}
 
