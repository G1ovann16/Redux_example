import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";

// const [name, setName] = useState([]);
const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 dwescr",
    completed: false,
  },
  { id: "2", title: "task 2", description: "task 2 dwescr", completed: false },
];
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.push(action.payload);
      // [...state, action.payload]
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    updateTask:(state,action)=>{
        const {id , title, description} = action.payload
        const foundTask = state.find(task => task.id === id)
        if(foundTask){
            foundTask.title = title
            foundTask.description = description
        }
    }
  },
});
export const { addTasks, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
