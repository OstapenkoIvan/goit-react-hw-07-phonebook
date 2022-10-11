import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from 'components/Filter/Filter.module.css';
import { getFilter } from 'redux/selectors.js';
import { setFilterData } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const searchValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = evt => {
    const filterData = evt.target.value;
    dispatch(setFilterData(filterData));
  };

  return (
    <div className={s.thumb}>
      <TextField
        sx={{ width: 180 }}
        label="Find contacts by name"
        type="search"
        variant="standard"
        value={searchValue}
        onChange={setFilter}
      />
    </div>
  );
};

export default Filter;

//!Standard input field with css.module//
//<label className={s.label}>
//Find contacts by name
//<input
//  className={s.input}
//  type="text"
//value={searchValue}
//onChange={setFilter}
///>
//</label>
