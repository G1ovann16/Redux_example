import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, updateTask } from "../features/tasks/taskSlice";
import {v4 as uuid} from "uuid"
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
    const params = useParams()
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const tasks = useSelector(state=>state.tasks)
    
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
if(params.id){
dispatch(updateTask(task))
}else{
    dispatch(addTasks({
        ...task,
        id: uuid()
    }))
}
        navigate("/")
    };
    useEffect(() => {
        if(params.id){
           setTask(tasks.find((task) => task.id === params.id))
        }
    }, []);
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-1">
        <label htmlFor="title" className="block text-sm font-bold" >Task: </label>
        <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
        />   
        <label htmlFor="description" className="block text-sm font-bold">Description: </label>
        
        <textarea
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1">save</button>
      </form>
    </div>
  );
}

export default TaskForm;
