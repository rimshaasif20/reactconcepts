import React, { useState } from 'react';
import {Card , Button} from 'react-bootstrap';
import '../App.css'
const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: taskName,
    };

    debugger;
    addTask(newTask)
    console.log(newTask);
    setTaskName('');
  };

  return (
    <Card style={{ width: '18rem' , marginTop: '80px', marginLeft: '500px' }}>
    <Card.Body>
    <Card.Title>Task Form</Card.Title>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br/>
      <br/>
      <Button  className="btn btn-sm btn-info" type="submit">Add Task</Button>
    </form>
    </Card.Body>
    </Card>
  );
};

export default TaskForm;
