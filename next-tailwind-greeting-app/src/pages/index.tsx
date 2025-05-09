import { useState } from 'react';
import UserNameInput from '../components/UserNameInput';
import GreetingButton from '../components/GreetingButton';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreeting = async () => {
    if (!userName) return;
    const response = await fetch(`/api/greeting?name=${userName}`);
    const data = await response.json();
    setGreeting(data.greeting);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Greeting App</h1>
      <UserNameInput onNameChange={(name) => setUserName(name)} />
      <GreetingButton userName={userName} onGreet={handleGreeting} />
      {greeting && <p className="mt-4 text-lg">{greeting}</p>}
    </div>
  );
};

export default Home;