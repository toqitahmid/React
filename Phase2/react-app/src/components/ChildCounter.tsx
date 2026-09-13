type CounterProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export default function ChildCounter({ count, setCount }: CounterProps) {

    const incriminent = () => {
        let cnt: number = count;
        ++cnt;
        setCount(cnt);

    } 
    const decriminent = () => {
        let cnt: number = count;
        --cnt;
        setCount(cnt);

    } 
    return (
        <div className="flex justify-center items-center h-[20vh] border-2 bg-amber-100 rounded-2xl text-2xl gap-5">
            <button className="border-2 px-5 rounded-2xl py-1" onClick={()=>incriminent()}>Incriminent</button>
            <button className="border-2 px-5 rounded-2xl py-1" onClick={()=>decriminent()}>Decriminent</button>
        </div>
    )
}