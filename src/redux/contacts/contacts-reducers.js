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
  [fetchContacts.pending]: (state, { payload }) => true,
  [fetchContacts.fulfilled]: (state, { payload }) => false,
  [fetchContacts.rejected]: (state, { payload }) => false,
  [fetchAddContact.pending]: (state, { payload }) => true,
  [fetchAddContact.fulfilled]: (state, { payload }) => false,
  [fetchAddContact.rejected]: (state, { payload }) => false,
  [fetchDeleteContact.pending]: (state, { payload }) => true,
  [fetchDeleteContact.fulfilled]: (state, { payload }) => false,
  [fetchDeleteContact.rejected]: (state, { payload }) => false,
});

export const rootReducer = combineReducers({
  items,
  filter,
  loading,
});
