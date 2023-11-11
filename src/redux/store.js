import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsReducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const phonebookPersistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['contacts'],
// };

// export const store = configureStore({
//   reducer: {
//     phonebook: persistReducer(phonebookPersistConfig, contactsReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
