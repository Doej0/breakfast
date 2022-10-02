import { Waffle,Pancake,FrenchToast } from "../components/menuItems";


export default function Menu() {

    return(
        <div id="menu" className="w3-container w3-black w3-xxlarge w3-padding-64">
        <h2 class="w3-center w3-jumbo w3-padding-32">THE MENU</h2>
        <nav className="w3-row w3-center w3-border w3-border-dark-grey">
            <a href="#waffles"><div className="w3-third w3-padding-large w3-blue-grey">Waffles</div></a>
            <a href="#pancakes"><div className="w3-third w3-padding-large w3-hover-blue-grey">Pancakes</div></a>
            <a href="#frenchToast"><div class="w3-third w3-padding-large w3-hover-blue-grey">French Toast</div></a>

        </nav>
        <div id="waffles" class="w3-container w3-white w3-padding-32"><Waffle/></div>
        <h1 id="pancakes" class="w3-center w3-jumbo w3-padding-32">PANCAKES</h1>
        <div class="w3-container w3-white w3-padding-32"><Pancake/></div>
        <h1 id="frenchToast" class="w3-center w3-jumbo w3-padding-32">FRENCH TOAST</h1>
        <div class="w3-container w3-white w3-padding-32"><FrenchToast/></div>


        </div>
    );
}