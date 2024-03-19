import React, { useState } from "react";
import UserContext from "./UserContext";

//context ki values access karne ke lia provider dena padta hai 
const UserContextProvider = ({children}) => {

        const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
 