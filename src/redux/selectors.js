export const selectContacts = store => store.contacts.items;
export const selectIsLoading = store => store.contacts.isLoading;
export const selectError = store => store.contacts.error;

export const selectFilter = store => store.filter;

export const selectFilteredContacts = store => {
    const filter = selectFilter(store);
    const contacts = selectContacts(store);
    if (filter) {
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter))
    } else {
        return contacts
    }
}