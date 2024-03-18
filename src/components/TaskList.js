import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleCheck }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.task}
          isChecked={task.isChecked}
          onToggleCheck={() => onToggleCheck(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;