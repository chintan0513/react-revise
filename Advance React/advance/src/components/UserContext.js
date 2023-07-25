import { useContext, useState } from "react";
import React from "react";

const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {

    const [user] = useState({
        name: "chintan",
        email: "abc@gmail.com",
        dob: "13/10/2000"
    });
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);