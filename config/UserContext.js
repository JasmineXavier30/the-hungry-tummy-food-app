import { createContext } from "react";

const UserContext = createContext({
    defaultUsername: "Default Username", setDefaultUsername: () => {} // default values
})

export default UserContext;