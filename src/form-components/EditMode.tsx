import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEdit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function changeStudent() {
        setStudent(!isStudent);
    }
    function changeMode() {
        setEdit(!inEdit);
    }
    return (
        <div>
            <Form.Switch checked={inEdit} onChange={changeMode} />
            {inEdit ?
                <div>
                    <Form.Group>
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="..."
                            value={name}
                            checked={true}
                            onChange={changeName}
                            required
                        ></Form.Control>
                    </Form.Group>

                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={changeStudent}
                        />
                        Student
                    </label>
                </div>
            :   <div>
                    <p>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            }
            <h3>Edit Mode</h3>
        </div>
    );
}
