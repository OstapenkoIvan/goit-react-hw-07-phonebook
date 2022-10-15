import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors.js';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from 'components/ContactList/ContactList.module.css';

const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filterContent = useSelector(getFilter);

  const contactsFiltered = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filterContent.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {contactsFiltered.map(contact => (
        <ContactListItem key={contact.id} data={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
