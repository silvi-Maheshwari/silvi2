import axios from 'axios';
import React from 'react';

const TodoItem = ({ title ,status}) => {
 

  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>{status}</h1>
   
    </div>
  );
};

export default TodoItem;
