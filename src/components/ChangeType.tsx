import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

// Maps the Old state -> New State
const TYPE_TRANSITIONS: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question",
};

export function ChangeType(): React.JSX.Element {
    // We have two parts to our State
    const [type, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    // No parameters or return value, because it's a closure
    function changeQuestionType(): void {
        const flipQuestionType = TYPE_TRANSITIONS[type];
        setQuestionType(flipQuestionType);
    }

    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {type === "multiple_choice_question" ?
                    <span>Multiple Choice</span>
                :   <span>Short Answer</span>}
            </div>
        </div>
    );
}
