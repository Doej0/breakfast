import city from "../city.jpg";

export default function Contact(){
    return(
        <>
      <img src={city} alt="city" className="w3-image w3-greyscale" style={{width:"100%"}}></img>
        <article  className="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge">
        <article className="w3-content">
        <h2 className="w3-center w3-jumbo" style={{marginBottom:"64px"}}>Contact</h2>
        <p>Find us at some address at some place or call us at 050-505-1223</p>
        <p><span class="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. 
        Etiam lacus lectus, auctor ut est sed, faucibus tincidunt neque. Etiam fermentum, ipsum sed 
        tristique posuere, est leo tempor mi, nec congue lectus purus at nisl.
       </p>
       <p class="w3-xxlarge"><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
       </article>

       <form action="/action_page.php" target="_blank">
      <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></input></p>
      <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People"></input></p>
      <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2022-10-01T20:00"></input></p>
      <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"></input></p>
      <p><button className="w3-button w3-light-grey w3-block" type="submit">SEND MESSAGE</button></p>
    </form>
    </article>
       
        </>
  
    );
}