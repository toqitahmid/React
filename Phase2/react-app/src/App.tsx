import { useState, type FormEvent } from 'react';
import './App.css'
import Card from './components/Card';

function App() {

  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const [allUsers, setAllUsers] = useState<User[]>([{
    id: 110,
    name: 'Araf',
  },
  {
    id: 210,
    name: 'Toqi',
  }]);


  type User = {
    id: number;
    name: string;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const newUser: User = {
      id: id,
      name: name
    }
    setAllUsers([...allUsers, newUser])
    console.log(allUsers);

  }
  return (

    <>
      <div>
        {
          allUsers.map((user: User) => (
            <Card key={user.id} {...user}></Card>
          ))
        }
      </div>


      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={(e) => setId(Number(e.target.value))} />
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App
