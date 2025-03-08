import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎁" | "🐇" | "🎃" | "🦃" | "💥";

const calendar: Record<Holiday, Holiday> = {
    "🐇": "💥",
    "💥": "🎃",
    "🎃": "🦃",
    "🦃": "🎁",
    "🎁": "🐇"
};

const alphabet: Record<Holiday, Holiday> = {
    "🎁": "🐇",
    "🐇": "💥",
    "💥": "🎃",
    "🎃": "🦃",
    "🦃": "🎁"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎁");
    function alphabetCycle(): void {
        setHoliday(alphabet[holiday]);
    }
    function calendarCycle(): void {
        setHoliday(calendar[holiday]);
    }
    return (
        <div>
            <Button onClick={alphabetCycle}>Alphabet</Button>
            <Button onClick={calendarCycle}>Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
