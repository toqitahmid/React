import Card from "./components/Card"

function App() {
  
  type UserInfo = {
    id: number;
    name: string;
    age: number;
  }

  const users: UserInfo[] = [
    {
      id: 110,
      name: 'Araf',
      age: 20,
    },
    {
      id: 220,
      name: 'Toqi',
      age: 20,
    },
    {
      id: 330,
      name: 'Tahmid',
      age: 18,
    }
  ]


  return (

    <>
      {
        users.map((user: UserInfo) => (
          
          <Card key={user.id} {...user}></Card>
        ))
      }
    </>
  )
}

export default App
