import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    return (
        <div>
            <Button
                onClick={() => {
                    if (type === "short_answer_question") {
                        setType("multiple_choice_question");
                    } else {
                        setType("short_answer_question");
                    }
                }}
            >
                Change Type
            </Button>
            <p>Current Question Type:</p>
            {type === "short_answer_question" ?
                <p>Short Answer</p>
            :   <p>Multiple Choice</p>}
        </div>
    );
}
