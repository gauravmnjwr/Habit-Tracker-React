import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasksSlice";


//configuring store by reducers of the task slice we just created
const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});

export { store };