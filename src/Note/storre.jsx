
import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './noteSlice';

const store = configureStore({
    reducer: {
        Note: noteSlice,
    },
});

export default store;
