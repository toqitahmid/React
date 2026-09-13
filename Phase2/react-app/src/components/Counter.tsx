import ChildCounter from "./ChildCounter";

type CounterProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export default function Counter({ count, setCount }: CounterProps) {
    return (
        <div className="">
            <div className="p-5 border-2 m-5 rounded-2xl">
                <ChildCounter count={count} setCount={ setCount} />
            </div>
        </div>
    )
}