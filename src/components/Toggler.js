const Toggler = () => {

    const handleClick = () => {
        const num = Math.floor(Math.random() * 6 + 1)
        console.log(num)
        const user = prompt("Please enter your Lucky Number")
        if (user >= 0 && user <= 5) {
            alert(`Computer Choice is ${num} and User Choice is  ${user}`);
        } else {
            alert("Invalid Number")
        }
    }

    return (
        <div>
            <p>Choose number between 1 to 5</p>
            <button onClick={handleClick}>Choose</button>
        </div>
    );
}

export default Toggler;
