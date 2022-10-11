import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import s from 'components/ContactForm/ContactForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    dispatch(addContact(name, number));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField
        type="text"
        helperText="Please enter your name"
        label="Name"
        name="name"
        color="secondary"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        size="small"
        fullWidth
        required
      />

      <TextField
        sx={{
          mt: 2,
        }}
        type="tel"
        helperText="Please enter your phone number"
        label="Number"
        name="number"
        color="secondary"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        size="small"
        fullWidth
        required
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          display: 'flex',
          width: 180,
          mt: 2,
          mx: 'auto',
        }}
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;

//!old formField with css.module
//
//  <form onSubmit={handleSubmit} className={s.form}>
// <label htmlFor="name" className={s.label}>
//   Name
// </label>
// <input
//   className={s.input}
//   id="name"
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />
// <label htmlFor="number" className={s.label}>
//   Phone number
// </label>
// <input
//   className={s.input}
//   type="tel"
//   id="number"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
// <button type="submit" className={s.submitBtn}>
//   Add contact
// </button>
// </form>
