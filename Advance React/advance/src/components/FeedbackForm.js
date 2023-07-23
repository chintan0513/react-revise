import { useState } from "react";


const FeedbackForm = () => {

    const [score, setScore] = useState("")
    const [comment, setComment] = useState("")

    const changeRating = (e) => {
        setScore(e.target.value)
    }

    const getComments = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please describe it more little bit")
        }
        alert("Form is submitted")
        setComment("")
        setScore("0")
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", width: "250px", justifyContent: "center", flexDirection: "column", position: "relative" }}>
            <h2>Feedback From</h2>
            <div className="field" style={{ display: "flex", flexDirection: "column", width: "250px" }}>
                <label htmlFor="rates">Score: {score} ⭐</label>
                <input type="range" name="rates" min="0" value={score} max="10" onChange={changeRating} />
                <label htmlFor="rates">Comment: </label>
                <textarea value={comment} onChange={getComments} />
            </div>
            <button disabled={!score} type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm;