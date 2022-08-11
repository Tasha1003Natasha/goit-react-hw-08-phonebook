// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import '../index.css';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// import { useDispatch } from 'react-redux';
///////////////////////////////////////////////////
import { Routes, Route } from 'react-router-dom';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import { Navigation } from './Navigation/Navigation';
import ContactsView  from 'views/ContactsView';

import LoginView from 'views/LoginView';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  // const dispatch = useDispatch();
  // /////////////////////////
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  ///////////////////////////
  // return (
  //   <>
  //     <h1 className="title">Phonebook</h1>
  //     <ContactForm />
  //     <h2 className="title">Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </>
  // );

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </>
  );
};
