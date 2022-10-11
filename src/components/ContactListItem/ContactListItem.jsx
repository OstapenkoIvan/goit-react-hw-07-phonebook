import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import s from 'components/ContactListItem/ContactListItem.module.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function ContactListItem({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Card
      sx={{
        width: 180,
        mx: 'auto',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p className={s.pEl}>{name}</p>
        <span className={s.spanEl}>{number}</span>
      </CardContent>
      <CardActions
        sx={{
          pt: 0,
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            mx: 'auto',
          }}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

ContactListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;

//!standard button with css.module
//<>
//  <p className={s.pEl}>{name}</p>
//  <span className={s.spanEl}>{number}</span>
//  <button className={s.btn} type="button" onClick={() => onDeleteContact(id)}>
//    Delete
//  </button>
//</>;
