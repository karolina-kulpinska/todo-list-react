import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Features/Tasks/tasksSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});