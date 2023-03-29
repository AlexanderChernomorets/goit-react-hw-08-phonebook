import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const contactsListServer = createAsyncThunk(
  'contacts/contactListServer',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const newContact = createAsyncThunk(
  'contacts/new',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      alert("Sorry, we couldn't add a new contact");
      return error.response.status;
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    alert("Sorry, we couldn't delete the contact");
    return error.response.status;
  }
});

export const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ id, ...credentials }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, credentials);
      return data;
    } catch (error) {
      alert(`${error.message}`);
      return error.response.status;
    }
  }
);
