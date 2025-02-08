import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from 'components/prop';
import { useSelector } from 'react-redux';

const ContactForm = props => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const click = e => {
    e.preventDefault();
    const name = e.nativeEvent.target.parentElement[0].value;
    const tel = e.nativeEvent.target.parentElement[1].value;

    if (
      !contacts.some(e => {
        if (name === e.name) {
          return true;
        }
        return false;
      })
    ) {
      dispatch(add({ name: name, tel: tel }));
    } else alert(`${name} is already in contact`);
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        // pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button onClick={click} type="submit">
        Add Contact
      </button>
    </form>
  );
};
export default ContactForm;
