// sbse phle configureStore late h core redux self. 

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store = configureStore({
    reducer: todoReducer
})



