import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from './components/Section';
import AppBar from './components/AppBar';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import Loader from './components/Loader';
import PhonebookList from './components/PhonebookList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    filter: '',
    isShow: false,
    errorMessage: '',
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const contacts = await localStorage.getItem('contacts');
    const parsedContacts = await JSON.parse(contacts);
    if (parsedContacts) await this.setState({ contacts: parsedContacts });
    this.setState({ isLoading: false });
  }

  componentDidUpdate(prevState) {
    const { contacts: nowContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (nowContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nowContacts));
    }
  }

  handleAddContact = (name, number) => {
    if (!name) return this.showNotification('Please enter contact name', true);
    if (!number) return this.showNotification('Please enter contact number', true);

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;
    const hasPresent = contacts.some(contact => contact.name === name);

    hasPresent
      ? this.showNotification(`${name} is already in contacts`, true)
      : this.setState(prevState => {
          return { contacts: [contact, ...prevState.contacts] };
        });
  };

  showNotification = (errorMessage, isShow) => {
    this.setState({ errorMessage, isShow });
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts.filter(el => el.id !== id)] });
  };

  render() {
    const { isShow, errorMessage, contacts, filter, isLoading } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Section>
        <AppBar isShow={isShow} onView={this.showNotification} message={errorMessage} />
        <ContactForm onAddContact={this.handleAddContact} />
        {contacts.length > 1 && <Filter value={filter} onFilterChange={this.handleFilter} />}
        {isLoading ? (
          <Loader className="loader" />
        ) : (
          filteredContacts.length > 0 && (
            <PhonebookList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
          )
        )}
      </Section>
    );
  }
}
