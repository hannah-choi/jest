import React from "react";

export default function ListItem({ text, id }) {
    return <li data-testid={id}>{text}</li>;
}
