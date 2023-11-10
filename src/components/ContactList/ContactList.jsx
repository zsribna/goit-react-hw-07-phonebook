import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from 'redux/contactsІnteraction';
import { getContacts, getFilters } from 'redux/selector';
import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContact = () => {
    if (!contacts || !Array.isArray(contacts)) return [];

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContact = getFilteredContact();

  return (
    <ul>
      {filteredContact.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={() => dispatch(deleteContacts(contact.id))}
          />
        );
      })}
    </ul>
  );
};
