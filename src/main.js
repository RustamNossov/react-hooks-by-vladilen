import React from "react";
import { useAlert } from "./examples/alert/AlertContext";


export default function Main() {
    const {toggle} = useAlert();

    return (
        <>
            <h1>Hello in example with Context</h1>
            <button onClick={toggle} className='btn btn-success'>Show Alert</button>
        </>
    )
}