import React, { useState, useEffect } from 'react';
import client from '../client';
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      let result;
      try {
        result = await client.get('tasks', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        });
        setTasks(result.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTasks();
  }, []);
  return (
    <section className="flex flex-col">
      <ul>
        {tasks.map((task) => {
          return <li>{task.name}</li>;
        })}
      </ul>
    </section>
  );
};
export default Tasks;
