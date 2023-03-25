import {createSlice} from '@reduxjs/toolkit';
import { fetchContacts, createContact, deleteContact } from '../contacts/contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}; 

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
      },
    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      },
      [fetchContacts.rejected]: handleRejected,
      [createContact.pending]: handlePending,
      [createContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      },
      [createContact.rejected]: handleRejected,
      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(task => task.id === action.payload.id);
        state.contacts.splice(index, 1);
      },
      [deleteContact.rejected]: handleRejected,
    },
  })

  export const contactReducer = contactsSlice.reducer;
