import { useState } from "react";

function useScores(initialValue) {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    };

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    };

    return [value, bind, reset];
}

export default useScores;

//den här är till för att sätta scores från rolls genom klick & att hålla tärningar
