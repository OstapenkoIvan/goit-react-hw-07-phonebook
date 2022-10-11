import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterState = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilterData: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilterData } = filterState.actions;
export const filterReducer = filterState.reducer;
