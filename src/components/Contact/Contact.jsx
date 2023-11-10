import { ContactItem, ListItem } from './Contact.styled';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact, onDeleteContact }) => {
  const distpatch = useDispatch();

  return (
    <ListItem>
      <ContactItem>
        {contact.name}: {contact.phone}
      </ContactItem>
      <button onClick={() => distpatch(onDeleteContact(contact.id))}>
        Видалити
      </button>
    </ListItem>
  );
};
