import { createContext, useContext, useMemo, useState } from "react"

interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CounterContext = createContext<CounterContextType | null>(null);

export default function CounterProvider({ children }) {
    const [count, setCount] = useState(0);
    const contextValue = useMemo<CounterContextType>(() => ({count,setCount}),[count])
    return (
        <CounterContext.Provider value={contextValue}>
            {children}
        </CounterContext.Provider>
    )
}

export function useSharedState() {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useSharedState must be used within a CounterProvider");
    }
    return context;
}