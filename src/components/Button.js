import React from 'react';
const Button = ({ title }) => {
  return (
    <button className="bg-gray-200 px-2 py-1 rounded-sm hover:bg-gray-300">
      {title}
    </button>
  );
};
export default Button;
