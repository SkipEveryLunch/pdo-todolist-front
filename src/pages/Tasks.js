import React, { useState, useEffect } from 'react';
import {
  fetchTasks,
  postTask,
  updateTask,
  deleteTask,
  fetchRefreshToken,
} from '../APIcalls';
import Input from '../components/Input';
import Button from '../components/Button';
import TaskCard from '../components/TaskCard';
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const handleFetchTasks = async () => {
    try {
      const res = await fetchTasks();
      if (res.status === 200) {
        setTasks(res.data);
      }
    } catch (e) {
      console.log('token expired');
      await fetchRefreshToken();
      const res = await fetchTasks();
      if (res.status === 200) {
        setTasks(res.data);
      }
    }
  };
  const handleSubmitTask = async (e) => {
    e.preventDefault();
    if (newTask.length > 0) {
      try {
        const res = await postTask(newTask);
        if (res.status === 201) {
          setNewTask('');
          handleFetchTasks();
        }
      } catch (err) {
        await fetchRefreshToken();
        const res = await postTask(newTask);
        if (res.status === 201) {
          setNewTask('');
          handleFetchTasks();
        }
      }
    }
  };
  const handleDoneTask = async (task) => {
    const { id, is_completed } = task;
    try {
      const res = await updateTask({ id, is_completed: !is_completed });
      if (res.status === 200) {
        handleFetchTasks();
      }
    } catch (e) {
      await fetchRefreshToken();
      const res = await updateTask({ id, is_completed: !is_completed });
      if (res.status === 200) {
        handleFetchTasks();
      }
    }
  };

  const handleDeleteTask = async (task) => {
    const { id, is_completed } = task;
    if (is_completed) {
      try {
        const res = await deleteTask(id);
        if (res.status === 200) {
          handleFetchTasks();
        }
      } catch (e) {
        await fetchRefreshToken();
        const res = await deleteTask(id);
        if (res.status === 200) {
          handleFetchTasks();
        }
      }
    }
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col justify-between h-4/5">
        <section className="scroller">
          <ul className="flex-1 flex flex-col gap-1 ">
            {tasks.map((task) => {
              return (
                <TaskCard
                  task={task}
                  handleDoneTask={handleDoneTask}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <form onSubmit={(e) => handleSubmitTask(e)} className="flex gap-1">
            <Input
              name="new"
              value={newTask}
              handleChange={(e) => setNewTask(e.target.value)}
            />
            <Button title="submit" />
          </form>
        </section>
      </div>
    </div>
  );
};
export default Tasks;
