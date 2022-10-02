import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="w3-top w3-bar w3-xlarge w3-black w3-opacity-min">
       <Link to ={"/"} className="w3-bar-item w3-button">HOME</Link>
       <Link to ={"menu/"} className="w3-bar-item w3-button">Menu</Link>
       <Link to ={"about/"} className="w3-bar-item w3-button">About</Link>
       <Link to ={"contact/"} className="w3-bar-item w3-button">Contact</Link>
      
        </nav>
    );
}