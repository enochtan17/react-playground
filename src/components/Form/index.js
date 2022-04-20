import React, { useState } from "react"

function Form() {
    const [answer, setAnswer] = useState('')
    const [feedback, setFeedback] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        if (parseInt(answer) !== 25) setFeedback('Wrong. Try again.')
        else setFeedback('Correct. Nice job.')
        setAnswer('')
    }

    return (
        <>
            <div>
                Hello!
            </div>
            <form onSubmit={submitForm}>
                <label>
                    5x5:
                </label>
                <input
                    type="text"
                    placeholder="answer"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                />
            </form>
            {feedback ? <p>{ feedback }</p> : ''}
        </>
    )
}

export default Form
