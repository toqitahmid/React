import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Form from './components/Form';
import CounterProvider from './providers/counter.provider';
import Counter from './components/Counter';

function App() {

  const [count, setCount] = useState(0)
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


  return (

    <CounterProvider>

      <div className=' flex justify-center items-center border-2 m-5 p-5 bg-amber-100 rounded-2xl text-4xl'>
        <p>{count}</p>
      </div>

      <div className='bg-amber-50 border-2 rounded-2xl m-5 grid grid-cols-2'>
        {
          allUsers.map((user: User) => (
            <Card key={user.id} {...user}></Card>
          ))
        }
      </div>

      <Form users={allUsers} setAllUsers={setAllUsers}></Form>


      <Counter count={count} setCount={ setCount} />

    </CounterProvider>
  )
}

export default App
