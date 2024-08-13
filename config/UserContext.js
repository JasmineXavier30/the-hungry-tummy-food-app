import { createContext } from "react";

const UserContext = createContext({
    defaultUsername: "User", setDefaultUsername: () => {} // default values
})

export default UserContext;