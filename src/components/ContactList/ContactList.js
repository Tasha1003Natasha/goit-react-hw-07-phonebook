import styles from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchDeleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  /////////////////////////

  useEffect(() => {
    if (dispatch !== 0) dispatch(fetchContacts());
  }, [dispatch]);

  ///////////////////////////
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
