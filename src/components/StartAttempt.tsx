import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function addAttempt(): void {
        setAttempts(attempts + 1);
    }
    function startProgress(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }
    function stopProgress(): void {
        setInProgress(false);
    }

    return (
        <div>
            <Button
                onClick={startProgress}
                disabled={attempts <= 0 || inProgress}
            >
                Start Quiz
            </Button>
            <Button onClick={stopProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
            <span>{attempts}</span>
        </div>
    );
}
