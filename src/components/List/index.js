import React, { useState } from "react"

function List({ breeds }) {
    const [display, setDisplay] = useState(false)

    // let breedsObj = {}

    const listButton = () => {
        setDisplay(!display)

        // fetch('https://dog.ceo/api/breeds/list/all')
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         breedsObj = {
        //             ...data.message
        //         }
        //     })
    }
    // console.log(breedsObj)

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
