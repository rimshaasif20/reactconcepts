import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const TaskItem = ({ task, removeTask }) => {
  const handleRemove = () => {
    removeTask(task.id);
  };

  return (

    <div className='container' style={{width: "400px"}} >
    <Table striped bordered hover variant="primary">
      <tbody>
        <tr key={task.id}>
          <td>{task.name}</td>
          <td><Button className="btn btn-sm btn-danger" onClick={handleRemove}>Remove</Button></td>
        </tr>
    </tbody>
    </Table>
    </div>
  );
};

export default TaskItem;
 