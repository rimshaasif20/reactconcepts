import React from 'react';
import TaskList from '../CompundSaredState/TaskList';
import TaskForm from '../CompundSaredState/TaskForm';
import TaskItem from '../CompundSaredState/TaskItem';
import Navigate from './Navigate'
const Services = () => {
  return (
    <>
    <Navigate />
    <TaskList className='container'>
      <TaskForm />
     <TaskItem />
    </TaskList>
    </>
  );
};

export default Services;
