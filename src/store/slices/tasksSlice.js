import { createSlice } from "@reduxjs/toolkit";

//created slice for tasks which is our main state
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask(state, action) {
            state.push(action.payload)
        },
        removeTask(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1);
        }
    }
})



export const { addTask, removeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;



