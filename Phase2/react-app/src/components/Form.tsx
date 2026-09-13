import { useState, type FormEvent } from "react";
import { useSharedState } from "../providers/counter.provider";

type User = {
    id: number;
    name: string;
}

type FormProps = {
    users: User[]
    setAllUsers: React.Dispatch<React.SetStateAction<User[]>>
}
export default function Form({ users, setAllUsers }: FormProps) {
    const { count, setCount } = useSharedState();
    const [name, setName] = useState('');
    const [id, setId] = useState(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        const newUser: User = {
            id: id,
            name: name
        }
        setAllUsers([...users, newUser])
        console.log(users);
    
    }
    return (
        <div className='bg-fuchsia-100 rounded-2xl border-2 m-5 p-5'>
            <div className="flex justify-center items-center text-4xl m-2 space-x-5">{count}
                <button
                    onClick={() => setCount(count + 1)}
                    className='border-2 px-5 py-2 mt-3 rounded-2xl ml-5'>Incrimenet</button>
            </div>
            <form className='' onSubmit={handleSubmit}>
                
                <div className='flex h-[30vh] justify-center items-center border-2 rounded-2xl'>
                    <p className='text-2xl'>Id</p>
                    <input type='text' className='border-2 h-10 rounded-2xl mr-3' onChange={(e) => setId(Number(e.target.value))} />
                    <p className='text-2xl'>Name</p>
                    <input className='border-2 h-10 rounded-2xl' type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex justify-center'>
                    <button className='border-2 px-5 py-2 mt-3 rounded-2xl' type='submit'>Submit</button>
                    
                </div>
            </form>
        </div>
    )
}