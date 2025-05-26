import { useRef, useEffect } from "react";

const FocuesedInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} placeholder="Scrivi qualcosa..." />;
}
    


export default FocuesedInput