import { useState } from 'react';

export function useInput(defaultValue: string) {
    const [input, setInput] = useState(defaultValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(() => e.target?.value);
    } 

    const reset = () => setInput('');

    return {
        onChange,
        input,
        reset
    }
}