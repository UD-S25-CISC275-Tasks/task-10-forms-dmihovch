import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    function changeUserChoice(e: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(e.target.value);
    }

    return (
        <div>
            <Form.Group>
                <Form.Select value={userChoice} onChange={changeUserChoice}>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{userChoice === expectedAnswer ? "✔️" : "❌"}</p>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
