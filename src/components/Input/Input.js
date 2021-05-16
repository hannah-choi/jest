import React, { useState } from "react";

export default function Input() {
    const [text, setText] = useState("");

    const inputValueChange = e => {
        setText(e.target.value);
    };

    return (
        <input
            title="input"
            type="text"
            value={text}
            onChange={e => inputValueChange(e)}
        ></input>
    );
}
