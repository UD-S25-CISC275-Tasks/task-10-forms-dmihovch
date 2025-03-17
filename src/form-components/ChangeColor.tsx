import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "purple",
        "yellow",
        "green",
        "cyan",
        "orange",
        "pink",
    ];

    const [color, setColor] = useState<string>("");

    return (
        <div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: { color },
                }}
            ></div>

            <h3>Change Color</h3>
        </div>
    );
}
