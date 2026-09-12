type User = {
    id: number;
    name: string;
}
export default function Card(user:User) {

    return (
        <>
            <div>
                <h1>{ user.name}</h1>
                <h3>{ user.id}</h3>
            </div>
        </>
    )
}