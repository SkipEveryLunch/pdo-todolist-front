import React, { useState } from 'react';
import client from '../client';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        console.log('key not found');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formString = JSON.stringify({
      username: email,
      password,
    });
    const res = await client.post('login.php', formString);
    console.log(res);
    if (res.status === 200) {
      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
      alert(`Logged in`);
    }
  };

  return (
    <section className="grid place-items-center">
      <form
        className="flex flex-col gap-7 w-1/3 items-start"
        onSubmit={handleSubmit}
      >
        <div className="w-full border-b border-gray-200 flex">
          <label htmlFor="email">email:</label>
          <input
            className="flex-auto px-2 py-1 focus:outline-none"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full border-b border-gray-200 flex">
          <label htmlFor="password">password:</label>
          <input
            className="flex-auto px-2 py-1 focus:outline-none"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-gray-200 px-2 py-1 rounded-sm">Login</button>
        </div>
      </form>
    </section>
  );
};
export default Login;
