import React, { useEffect } from 'react';
import { StyledPhonebook } from './ContactsPage.styled';
import { useDispatch, useSelector } from 'react-redux';

import {
  addNewContact,
  deleteContact,
  fetchAllContacts,
  setFilter,
} from 'redux/contactsReducer';

import {
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
  selectContactsItems,
} from 'redux/contactsSelectors';
import { Loader } from 'components/Loader';
import Error from 'components/Error';
import { toast } from 'react-toastify';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContactsItems);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = event => {
    event.preventDefault();
    const name = event.currentTarget.contactName.value;
    const phone = event.currentTarget.contactNumber.value;
    const newContact = {
      name,
      phone,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      toast.warning(`${newContact.name} is already in contacts.`);
      return;
    } else if (contacts.some(contact => contact.phone === newContact.phone)) {
      toast.warning(
        `Contact with phone ${newContact.phone} is already in contacts.`
      );
      return;
    }
    if (isNaN(phone)) {
      toast.warning('Phone must contain only numbers.');
      return;
    }
    dispatch(addNewContact(newContact));
    event.currentTarget.reset();
    toast.success('Contact added to phonebook');
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact is deleted');
  };

  const handleFilterContacts = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <StyledPhonebook>
      <h1 className="phonebookTitle">Phonebook</h1>
      <form onSubmit={handleAddContact} className="phonebookForm">
        <label className="phonebookLabel">
          <span>Name</span>
          <input
            className="phonebookInput"
            type="text"
            name="contactName"
            required
          />
        </label>
        <label className="phonebookLabel">
          <span>Number</span>
          <input
            className="phonebookInput"
            type="tel"
            name="contactNumber"
            required
          />
        </label>
        <button type="submit" className="phonebookAddBtn">
          Add contacts
        </button>
      </form>

      <div>
        <h2 className="phonebookTitle">Contacts</h2>
        <input
          onChange={handleFilterContacts}
          className="phonebookInput"
          type="text"
          name="contactFilter"
          id=""
          placeholder="Seatch contact"
        />
      </div>

      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}

      <ul className="phonebookList">
        {filteredContact !== null &&
          filteredContact.map(({ id, name, phone }) => {
            return (
              <li key={id} className="phonebookItem">
                <div>
                  <h3>
                    Name: <br /> {name}
                  </h3>
                  <p>Tel: {phone}</p>
                </div>
                <button
                  className="phonebookDeleteBtn"
                  onClick={() => handleDeleteContact(id)}
                >
                  Delete contact
                </button>
              </li>
            );
          })}
      </ul>
    </StyledPhonebook>
  );
};

export default ContactsPage;
