import React, { useState } from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ children }) => {
  const [tasks, setTasks] = useState([]);
debugger;
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const childComponents = React.Children.map(children, (child) =>
    React.cloneElement(child, { tasks,addTask, removeTask })
  );

  return (
    <>
  <div>{childComponents}</div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} removeTask={removeTask} />
        ))}
  </>
  )
};

export default TaskList;
