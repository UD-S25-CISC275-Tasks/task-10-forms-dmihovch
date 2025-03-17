import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(e.target.value);
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    name="answer"
                    placeholder="..."
                    value={userAnswer}
                    onChange={updateAnswer}
                    required
                />
            </Form.Group>
            {userAnswer === expectedAnswer ?
                <p>✔️</p>
            :   <p>❌</p>}
            <h3>Check Answer</h3>
        </div>
    );
}
