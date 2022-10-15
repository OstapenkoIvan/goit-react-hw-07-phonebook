import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from 'components/Filter/Filter.module.css';
import { selectFilter } from 'redux/selectors.js';
import { setFilterData } from 'redux/filterSlice';

const Filter = () => {
  const searchValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setFilter = evt => {
    dispatch(setFilterData(evt.target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={searchValue}
        onChange={setFilter}
      />
    </label>
  );
};

export default Filter;
