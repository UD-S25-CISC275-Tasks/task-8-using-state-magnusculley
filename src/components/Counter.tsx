import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    function addOne(): void {
        setValue(1 + value);
    }
    return (
        <span>
            <Button onClick={addOne}>Add One</Button>
            to {value}.
        </span>
    );
}
