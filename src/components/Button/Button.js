import React, { useState } from "react";

export default function Button() {
    const [buttonText, setButtonText] = useState("click");

    const buttonClick = () => {
        setButtonText("clicked");
    };

    return (
        <button data-testid="button" onClick={() => buttonClick()}>
            {buttonText}
        </button>
    );
}
