// import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import contactsList from '../../data/contacts.json';

import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';

// Hooks ==========================================================================

export default function App() {

  // used useState instead state
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contactsList')) ?? contactsList); // DidMount replaced
  const [filter, setFilter] = useState('');

  // DidUpdate replaced
  useEffect(() => {
    window.localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  // used setContacts instead setState
  const addContact = (name, number) => {
    const normalizedNameInput = name.toLowerCase();
    const matchByName = contacts.find(contact => contact.name.toLowerCase() === normalizedNameInput);

    if (matchByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      setContacts((contacts) => ([contact, ...contacts]));
    }
  };

  // used setFilter instead setState 
  const changeFilter = event => {
    setFilter(filter => event.target.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(normalizedFilter),
    );
  };

  const deleteContact = (contactId) => { 
    setContacts((contacts) => (contacts.filter(contact => contact.id !== contactId)));
  };
  
  return (
    <div className={css.Phonebook}>
      <h1 className={css.Phonebook__title}>Phonebook</h1>
      
      <ContactForm
        onSubmit={addContact}
      />

      <h2 className={css.Phonebook__title}>Contacts</h2>
      
      <ContactFilter
        filter={filter}
        onFilter={changeFilter}
      />
      
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

// Live Cycles ====================================================================

// class OldApp extends React.Component {

//   state = {
//     contacts,
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const normalizedNameInput = name.toLowerCase();
//     const matchByName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedNameInput);

//     if (matchByName) {
//       alert(`${name} is already in contacts`);
//     } else {
//       const contact = {
//         id: nanoid(),
//         name: name,
//         number: number,
//       };

//       this.setState((prevState) => ({
//         contacts: [contact, ...prevState.contacts]
//       }));
//     }
//   }

//   changeFilter = event => {
//     this.setState({
//       filter: event.currentTarget.value,
//     });
//   };

//   filteredContacts = () => { 
//     const normalizedFilter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter(contact =>
//       contact.name
//         .toLowerCase()
//         .includes(normalizedFilter),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }));
//   };

//   render() {

//     return (
//       <div className={css.Phonebook}>
//         <h1 className={css.Phonebook__title}>Phonebook</h1>
//         <ContactForm
//           onSubmit={this.addContact}
//         />

//         <h2 className={css.Phonebook__title}>Contacts</h2>
//         <ContactFilter
//           filter={this.state.filter}
//           onFilter={this.changeFilter}
//         />
//         <ContactList
//           contacts={this.filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     )
//   }
// }

// export default App;