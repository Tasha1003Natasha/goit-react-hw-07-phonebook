import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API = (axios.defaults.baseURL =
  'https://62f243ab18493ca21f300ef7.mockapi.io/api/v1');

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const { data } = await axios.post('/contacts', { name, number });
    return data;
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
