import React from 'react';
const Input = (props) => {
  const { name, value, handleChange } = props;
  let inputType;
  switch (name) {
    case 'email':
      inputType = 'email';
      break;
    case 'password':
      inputType = 'password';
      break;
    default:
      inputType = 'text';
  }
  return (
    <div className="w-full border-b border-gray-200 flex items-center">
      <label htmlFor={name}>{name}:</label>
      <input
        className="flex-auto px-2 py-1 focus:outline-none"
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
