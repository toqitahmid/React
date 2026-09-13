

export default function Card(user) {

    return (
        <>
            <div className="bg-amber-100 rounded-2xl border-2 m-5 flex justify-between p-4 text-2xl font-semibold">
                <h1>Name: { user.name}</h1>
                <h3>Id: { user.id}</h3>
            </div>
        </>
    )
}