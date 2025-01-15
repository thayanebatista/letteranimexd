import React from 'react';

type ButtonProps = {
  label: string,
  backgroundColor?: string,
  onClick?: () => void,
  disabled?: boolean,
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`py-2 px-5 rounded-md border-solid border border-primary
                  text-primary transition ease-in-out delay-75
                  hover:-translate-y-1 hover:scale-110 duration-100
                  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
