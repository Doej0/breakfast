import React from "react";
import { frenchToast,pancakes,waffles } from "../data";

  function Waffle() {
        const menuWaffle = waffles.map((waffle)=>
        <>
        <h2><b>{waffle.name}</b></h2>
        <span className="w3-right w3-tag w3-dark-grey w3-round">{waffle.price}</span>
        <p class="w3-text-grey">{waffle.description}</p>
        <hr/>
        </>
        );
        return(
            menuWaffle
        ); 

    }
   
    function Pancake(){
        const menuPancake = pancakes.map((pancake)=>
        <>
            <h2><b>{pancake.name}</b></h2>
            <span className="w3-right w3-tag w3-dark-grey w3-round">{pancake.price}</span>
            <p class="w3-text-grey">{pancake.description}</p>
            <hr/>
        </>
        );
        return(
            menuPancake
        );

    }
    
   function FrenchToast(){
    const menuFrenchToast = frenchToast.map((frenchtoast)=>
    <>
        <h2><b>{frenchtoast.name}</b></h2>
        <span className="w3-right w3-tag w3-dark-grey w3-round">{frenchtoast.price}</span>
        <p class="w3-text-grey">{frenchtoast.description}</p>
        <hr/>
    </>
    );
    return(
        menuFrenchToast
    );

   }

    



export {Waffle,Pancake,FrenchToast}