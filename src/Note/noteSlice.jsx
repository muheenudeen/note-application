// noteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: 'task1',
    description: 'aaaaaaaaaa.',
    color: 'red',
};

const noteSlice = createSlice({
    name: 'Note',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { setTitle, setDescription, setColor } = noteSlice.actions;

export default noteSlice.reducer;
