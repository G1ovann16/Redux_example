import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">{tasks.length} Task
      <Link to={"/create-task"} className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">create new task</Link>
      </header>
      <div className="grid grid-cols-3 gap-4">

      {tasks.map(task => (
        <div key={task.id}className="bg-neutral-800 rounded-md">
          <header className="flex justify-between">

          <h3>{task.title}</h3>
          <div className="flex gap-x-2">

          <Link className="bg-zinc-600 px-2 py-1 text-xs rounded-md" to={`/edit-task/${task.id}`}>Edit</Link>
          <button className="bg-red-500 px-2 py-1 text-xs rounded-md" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
          </header>
          <p>{task.description}</p>
          <h3>{task.completed}</h3>
        </div>
      ))}
      </div>
    </div>
  );
}

export default TasksList;
