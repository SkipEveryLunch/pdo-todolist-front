import client from './client';

export const fetchTasks = async () => {
  const res = await client.get('tasks', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  return res;
};

export const postTask = async (name) => {
  const formString = JSON.stringify({
    name,
  });
  const res = await client.post('tasks', formString, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  return res;
};

export const updateTask = async (data) => {
  const formString = JSON.stringify({
    is_completed: data.is_completed,
  });
  const res = await client.patch(`tasks/${data.id}`, formString, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  return res;
};

export const deleteTask = async (id) => {
  const res = await client.delete(`tasks/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  return res;
};

export const fetchRefreshToken = async () => {
  const tokenString = JSON.stringify({
    token: localStorage.getItem('refresh_token'),
  });
  try {
    const resRefresh = await client.post('refresh.php', tokenString);
    if (resRefresh.status === 200) {
      localStorage.setItem('access_token', resRefresh.data.access_token);
      localStorage.setItem('refresh_token', resRefresh.data.refresh_token);
      console.log('token refreshed');
    }
  } catch (e) {
    console.log(e);
  }
};
