import React from 'react';
const TaskCard = ({ task, handleDoneTask, handleDeleteTask }) => {
  return (
    <li key={task.id}>
      <div class="block w-full flex border h-10 px-2 items-center">
        <span
          className={`${task.is_completed ? 'line-through' : ''} flex-1`}
          onClick={() => handleDoneTask(task)}
        >
          {task.name}
        </span>
        {task.is_completed ? (
          <div
            className="cursor-pointer grid place-items-center hover:bg-gray-100 px-1 rounded"
            onClick={() => handleDeleteTask(task)}
          >
            ×
          </div>
        ) : (
          ''
        )}
      </div>
    </li>
  );
};
export default TaskCard;
