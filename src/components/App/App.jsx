// import data from '../../data.json';
// import { useState, useEffect } from 'react';
import './App.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
// const shortid = require('shortid');

function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const handleFilter = e => {
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // };
  // useEffect(() => {
  //   const localContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (localContacts) {
  //     setContacts(localContacts);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleSubmit = data => {
  //   const search = contacts.find(
  //     el => el.name.toLowerCase() === data.name.toLowerCase(),
  //   );
  //   if (search) {
  //     alert(`${search.name} is already in contacts.`);
  //     return;
  //   }

  //   const newContact = {
  //     ...data,
  //     id: shortid.generate(),
  //   };
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const getContactList = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const onDeleteContact = id => {
  //   setContacts(prevState => {
  //     const filtered = prevState.filter(el => el.id !== id);
  //     return [...filtered];
  //   });
  // };
  return (
    <div className="App">
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={handleSubmit} /> */}
      <ContactForm />
      <h2>Contacts</h2>
      <p className="App-find">Find contacts by name</p>
      {/* <Filter value={filter} onFilter={handleFilter} /> */}
      <Filter />
      {/* <ContactList
        contacts={getContactList()}
        onDeleteContact={onDeleteContact}
      /> */}
      <ContactList />
    </div>
  );
}

export default App;
