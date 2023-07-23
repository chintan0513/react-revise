import { useState } from "react"

const Form = () => {

    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name !== "") {
            console.log(`Hi ${name}, How Are You?`)
            setName("")
        } else {
            alert("Please enter a valid text :)")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Text: </label>
            <input id="name" type="text" value={name} onChange={handleChange} name="name" placeholder="Type Anything" />
            <button disabled={!name} type="submit">Submit</button>
        </form>
    );
}

export default Form;