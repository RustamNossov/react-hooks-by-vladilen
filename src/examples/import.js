import React, {useState, useEffect} from "react";

export default function ItemsList({getItems}) {
    const [items, setItems] = useState([])
    useEffect (() => {
        console.log('useeffect')
        const newItems = getItems(42)
        setItems(newItems)
    }, [getItems])
    return (
        <ul>
            {items.map(i => <li key={i}>{i} </li>)}

        </ul>
    )
}