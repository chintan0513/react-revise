import { useEffect, useState } from "react";


const Fetch = () => {


    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setUser(data))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return Object.keys(user).length > 0 ? (
        <div>
            <h2>Hi {user.results[0].name.first} {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Oops Bad Request. However, Data is pending</h1>
    );
}

export default Fetch;