import { useState } from "react";

function useRollsLeft(initialCount = 0, value) {
    const [rollsLeft, setRollsLeft] = useState(initialCount);

    const incrementRollsLeft = () => {
        setRollsLeft(prevRollsLeft => prevRollsLeft + value);
    }

    const noRollsLeft = () => {
        if(rollsLeft === 3) {
            setRollsLeft(initialCount);
        }
    }

    return [rollsLeft, incrementRollsLeft, noRollsLeft];
}

export default useRollsLeft;

//den här är till för att räkna rolls left 