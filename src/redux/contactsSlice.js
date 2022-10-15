import { createSlice } from '@reduxjs/toolkit';
//* 1)сначала создаем operations, как генератор экшенов для слайса.
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

//* 3)рефакторим повторяющийся код, выводим его во внешние функции.
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  //* 2)в extraReducers создается обработка внешних экшенов, созданных в operations (createAsyncThunk).
  extraReducers: {
    [fetchContacts.pending](state) {
      handlePending(state); //изначальный код - state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      handleRejected(state, action); //изначальный код - state.isLoading = false; state.error = action.payload;
    },
    [addContact.pending](state) {
      handlePending(state); //изначальный код - state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload]; //alt state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      handleRejected(state, action); //изначальный код - state.isLoading = false; state.error = action.payload;
    },
    [deleteContact.pending](state) {
      handlePending(state); //изначальный код - state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1); //alt state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContact.rejected](state, action) {
      handleRejected(state, action); //изначальный код - state.isLoading = false; state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
