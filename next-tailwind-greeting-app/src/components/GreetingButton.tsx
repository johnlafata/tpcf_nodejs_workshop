import React from 'react';

interface GreetingButtonProps {
  userName: string;
  onGreet: () => void;
}

const GreetingButton: React.FC<GreetingButtonProps> = ({ userName, onGreet }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onGreet}
      disabled={!userName}
    >
      Generate Greeting
    </button>
  );
};

export default GreetingButton;