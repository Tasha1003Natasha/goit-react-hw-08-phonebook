import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import '../index.css';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  /////////////////////////
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  ///////////////////////////
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
