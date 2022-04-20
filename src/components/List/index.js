import React, { useState } from "react"

function List({ breeds }) {
    const [display, setDisplay] = useState(false)

    const listButton = () => {
        setDisplay(!display)
    }


    return (
        <>
            <button
                onClick={listButton}
            >
                Display List
            </button>
            <ul>
                {display && breeds.map((breed, idx) => (
                    <li
                        key={idx}
                    >
                        {breed}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List
