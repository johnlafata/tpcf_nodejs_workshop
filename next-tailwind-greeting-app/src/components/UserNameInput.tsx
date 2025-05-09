import React, { useState } from 'react';

const UserNameInput: React.FC<{ onNameChange: (name: string) => void }> = ({ onNameChange }) => {
    const [name, setName] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        onNameChange(event.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border rounded p-2"
            />
        </div>
    );
};

export default UserNameInput;