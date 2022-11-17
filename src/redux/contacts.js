import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, { payload }) => {
            state.value = [...state.value, payload];
        },
        
        deleteContacts: (state, { payload }) => {
            state.value = state.value.filter(contact => contact.id !== payload);
        },
    },
});

export const { setContacts, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;