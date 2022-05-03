import client from './client';

export const fetchTasks = async () => {
  const res = await client.get('tasks', {
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
