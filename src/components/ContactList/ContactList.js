import styles from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();


  const handleDelete = id => dispatch(fetchDeleteContact(id));

  const getSubmitContacts = (items, filter) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactList = getSubmitContacts(items, filter);

  return (
    <ul className={styles.contact__list}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={styles.contact__item} key={id}>
            {name} : {number}
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className={styles.contact__btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
