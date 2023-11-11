import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653a9a5f2e42fd0d54d42f43.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const fetchContactById = async contactId => {
  const { data } = await contactsInstance.get(`/contacts/${contactId}`);
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post(`/contacts`, newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};
