import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import client from '../client';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
      name,
      username: email,
      password,
    });
    const res = await client.post('register.php', formString);
    if (res.status === 200) {
      alert(`Welcome, ${name}. You've successfully Registered!`);
    }
  };

  return (
    <section className="grid place-items-center">
      <form
        className="flex flex-col gap-7 w-1/3 items-start"
        onSubmit={handleSubmit}
      >
        <Input name="name" value={name} handleChange={handleChange} />
        <Input name="email" value={email} handleChange={handleChange} />
        <Input name="password" value={password} handleChange={handleChange} />
        <div className="w-full flex justify-end">
          <Button title="Register" />
        </div>
      </form>
    </section>
  );
};
export default Register;
