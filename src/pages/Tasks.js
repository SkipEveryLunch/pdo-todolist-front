import React, { useState, useEffect } from 'react';
import { fetchTasks, postTask, fetchRefreshToken } from '../APIcalls';
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
  useEffect(() => {
    handleFetchTasks();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between">
        <section>
          <ul>
            {tasks.map((task) => {
              return <li key={task.id}>{task.name}</li>;
            })}
          </ul>
        </section>
        <section>
          <form onSubmit={(e) => handleSubmitTask(e)} action="">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
            />
            <button>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default Tasks;
