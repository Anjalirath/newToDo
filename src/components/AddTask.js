import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() !== '') {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div>
      <TextField id="outlined-basic" 
      label="Add a new Task" 
      variant="outlined"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>Add Task</Button>
    </div>
  );
};

export default AddTask;