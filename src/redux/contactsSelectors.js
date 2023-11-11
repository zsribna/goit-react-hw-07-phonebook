export const selectContactsItems = state => state.phonebook.contacts.items;
export const selectContactsIsLoading = state =>
  state.phonebook.contacts.isLoading;
export const selectContactsError = state => state.phonebook.contacts.error;
export const selectContactsFilter = state => state.phonebook.filter;
