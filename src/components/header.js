import { Link } from "react-router-dom";

export default function Header() {
    return(
    <header className="w3-display-container w3-grayscale-min">
    <div className="bgImage">
        <p className="w3-display-bottomleft">
            <h2 className="w3-tag w3-xlarge w3-opacity-min">Come Eat with us from 5am to 2pm</h2>
        </p>
        <p className="w3-display-middle w3-center">
            <h3 style={{fontSize: "125px" }}className="w3-text-white">Breakfast Bar</h3>
           <Link to={'menu/'}> <h4 className="w3-button w3-xxlarge w3-black w3-opacity-min">Let me see the menu</h4></Link>
        </p>
        
    </div>

    </header>
    );
}