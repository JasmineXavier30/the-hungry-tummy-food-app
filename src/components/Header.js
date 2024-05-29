import logo from "../../images/logo.jpg";

const Header = () => {
    const header = 
        <div className="header-container">
            <img id="logo" src={logo} alt="logo" />
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>;

    return header;
}

export default Header;