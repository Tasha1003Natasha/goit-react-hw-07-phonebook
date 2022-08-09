import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterUser } from './contacts-actions';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [fetchAddContact.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchDeleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filter = createReducer('', {
  [filterUser]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [fetchAddContact.pending]: () => true,
  [fetchAddContact.fulfilled]: () => false,
  [fetchAddContact.rejected]: () => false,
  [fetchDeleteContact.pending]: () => true,
  [fetchDeleteContact.fulfilled]: () => false,
  [fetchDeleteContact.rejected]: () => false,
});

export const rootReducer = combineReducers({
  items,
  filter,
  loading,
});
