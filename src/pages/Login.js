import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import client from '../client';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formString = JSON.stringify({
      username: email,
      password,
    });
    try {
      const res = await client.post('login.php', formString);
      if (res.status === 200) {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        alert(`Logged in`);
        navigate('/');
      }
    } catch (e) {
      if (e.response.status === 401) {
        alert(
          `Error Occurred during loggin in. Please reconfirm your email and password`
        );
      } else {
        alert('Unknown error occurred');
      }
    }
  };

  return (
    <section className="grid place-items-center">
      <form
        className="flex flex-col gap-7 w-1/3 items-start"
        onSubmit={handleSubmit}
      >
        <Input name="email" value={email} handleChange={handleChange} />
        <Input name="password" value={password} handleChange={handleChange} />
        <div className="w-full flex justify-end">
          <Button title="Login" />
        </div>
      </form>
    </section>
  );
};
export default Login;
