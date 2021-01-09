import types from './types';

const shortid = require('shortid');

export const addContact = data => ({
  type: types.ADD,
  payload: {
    ...data,
    id: shortid.generate(),
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const filterContact = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
