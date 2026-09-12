type UserInfo = {
    id: number;
    name: string;
    age: number;
}

export default function Card(user:UserInfo) {

    return (
        <>
            <h1 className="text-2xl">{user.name}</h1>
            <h2>{user.id}</h2>
            <h2>{user.age}</h2>
        </>
    )
}