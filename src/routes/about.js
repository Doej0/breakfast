import chef from "../chef.jpg";
import restaurant from "../restaurant.jpg";


export default function About() {
    return(
        <div className="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge">
        <article className="w3-content">
            <h2 style={{marginBottom:'64px'}}className="w3-center w3-jumbo">About</h2>
            <p>The Breakfast Bar was founded by Mrs.Fondue in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p><strong>The Chef?</strong> Mrs. Fondue herself</p>
           <img src={chef} style={{width:'150px'}} className="w3-circle w3-right"alt="chef"></img>

            <p>We are proud of our Breakfast Bar.</p>

            <img src={restaurant} style={{width:"100%"}} className="w3-margin-top w3-margin-bottom" alt='restaurant'></img>


            <article>
            <h1><b>Opening Hours</b></h1>
            <div class="w3-row">
            <div class="w3-col s6">
            <p>Monday 5:00a - 2:00p</p>
            <p>Tuesday 5:00a - 2:00p</p>
            <p>Wednesday 5:00a - 2:00p</p>
            <p>Thursday 5:00a - 2:00p</p>
            </div>
            <div class="w3-col s6">
            <p>Friday 5:00a - 2:00p</p>
            <p>Saturday 5:00a - 2:00p</p>
            <p>Sunday 5:00a - 2:00p</p>
            </div>
            </div>
            </article>
        </article>

        </div>
        
    );
}