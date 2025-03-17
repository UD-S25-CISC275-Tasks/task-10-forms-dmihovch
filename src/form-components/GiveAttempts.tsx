import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [atR, setAtR] = useState<number>(3);
    const [reqA, setReqA] = useState<number>(0);

    function decAtts() {
        setAtR(atR - 1);
    }

    function incAtts(e: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(e.target.value))) {
            setReqA(parseInt(e.target.value));
        }
        if (e.target.value === "") {
            setReqA(0);
        }
    }

    function addAtts() {
        setAtR(atR + reqA);
    }

    return (
        <div>
            <p>Attempts Remaining: {atR}</p>
            <Button onClick={decAtts} disabled={!atR}>
                use
            </Button>
            <Button onClick={addAtts}>gain</Button>
            <Form.Group>
                <Form.Label>Add Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={reqA}
                    onChange={incAtts}
                ></Form.Control>
            </Form.Group>

            <h3>Give Attempts</h3>
        </div>
    );
}
