import React from 'react';

interface IButtonProps {
  children?: React.ReactNode;
  handleClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className="border-2 border-gray-500 rounded-md p-2 bg-teal-100"
    >
      {children}
    </button>
  );
};

export default Button;
