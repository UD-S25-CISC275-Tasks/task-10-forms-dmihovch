import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [prog, setProg] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    return (
        <div>
            <Button
                onClick={() => {
                    setProg(true);
                    setAttempts(attempts - 1);
                }}
                disabled={!attempts || prog}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProg(false);
                }}
                disabled={!prog}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={prog}
            >
                Mulligan
            </Button>
            <h3>
                Quiz:{" "}
                {prog ?
                    <p>In progress</p>
                :   <p>Not in progress</p>}
            </h3>
            <p>{attempts} attempts left</p>
        </div>
    );
}
