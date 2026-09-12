import { useState } from "react";

type UserInfo = {
    id: number;
    name: string;
    age: number;
}

export default function Card(user: UserInfo) {
    // const [name, setName] = useState('');
    const [value, setValue] = useState(0)


    const clickHandler = (name:string):void => {
        console.log(name);
        // setName(name)
    }

    const setIncriminent = ():void => {
        let cnt = value;
        ++cnt;
        setValue(cnt)
    }
    const setDecriminent = ():void => {
        let cnt = value;
        --cnt
        setValue(cnt)
    }
    return (
        <>
            <div onClick={() => clickHandler(user.name)}>
            <h1 className="text-2xl">{user.name}</h1>
            <h2>{user.id}</h2>
                <h2>{user.age}</h2>
                <button onClick={()=>setIncriminent()}>Incriminent</button>
                {value}
                <button onClick={() => setDecriminent()}>Decriminent</button>
            </div>
        </>
    )
}