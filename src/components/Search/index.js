import React, { useState } from "react"

function Search({ breeds }) {
    const [search, setSearch] = useState('')

    // console.log('inside search', breeds)

    return (
        <>
            <label
                htmlFor="search"
            >
                Search
            </label>
            <input
                type="text"
                placeholder="search breeds..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            >
            </input>
            {breeds.filter(breed => {
                if (search.length === 0) return search
                else return breed.toLowerCase().includes(search.toLowerCase())
            })
                .map((match, idx) => (
                    <p key={idx}>{match}</p>
                ))
            }
        </>
    )
}

export default Search
