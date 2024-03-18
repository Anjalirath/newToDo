import { Checkbox, Button } from '@mui/material';
import React from 'react';

const Task = ({ task, onDelete, isChecked, onToggleCheck }) => {
    return (
      <div>
        <Checkbox type="checkbox" checked={isChecked} onChange={onToggleCheck} />
        <span>{task}</span>
        <Button variant="contained" onClick={onDelete} disabled={!isChecked}>
          Delete
        </Button>
      </div>
    );
  };
export default Task;