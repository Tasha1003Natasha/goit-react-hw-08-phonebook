import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import '../index.css';
import { useSelector } from 'react-redux';

const ContactsView = () => {
  const isLogin = useSelector(state => state.auth.isLoggerIn);

  return (
    <>
      {isLogin && (
        <div className="contacts-list">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </>
  );
};

export default ContactsView;
