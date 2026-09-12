import { useState } from "react";

import type { FormEvent } from "react";

export default function From() {
    const [name, setName] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(name);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}