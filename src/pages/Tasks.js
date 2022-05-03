import React, { useState, useEffect } from 'react';
import { fetchTasks, fetchRefreshToken } from '../APIcalls';
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
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
  useEffect(() => {
    handleFetchTasks();
  }, []);
  return (
    <section className="flex flex-col">
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.name}</li>;
        })}
      </ul>
    </section>
  );
};
export default Tasks;
