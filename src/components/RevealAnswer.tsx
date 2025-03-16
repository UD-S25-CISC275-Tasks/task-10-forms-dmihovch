import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [rev, setRev] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setRev(!rev);
                }}
            >
                Reveal Answer!
            </Button>
            <div>
                {rev ?
                    <p>42</p>
                :   <p></p>}
            </div>
        </div>
    );
}
