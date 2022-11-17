import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import contacts from './contacts';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: 'contacts',
    version: 1,
    storage,
};

const persistedContactsReducer = persistReducer(
    contactsPersistConfig,
    contacts
);

export const store = configureStore({
    reducer: {
        filter,
        contacts: persistedContactsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);