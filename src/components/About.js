import UserContext from "../../config/UserContext";
import { useContext } from "react";

const About = () => {

    const { defaultUsername } = useContext(UserContext);
    return <h1>{ defaultUsername }</h1>
}

export default About;