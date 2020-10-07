import React from 'react';

const Searchbox = ({searchprop})=>{
    return (
        <div className='pa2 '>
        <input className ='pa3 ba b--green bg-lightest-blue' type ='search' placeholder='Search for your robot...' onChange ={searchprop}/>
        </div>
    )
}

// ONCHANGE PASSES SEARCHBOX VALUE TO SEARCHPROP

//SEARCHPROP SENDS THIS VALUE TO APP.JS 

//WHEN INSIDE APP.JS SEARCHPROP PASSES THE VALUE TO ONSEARCHCHANGE FUNCTION

//ONSEARCHCHANGE FUNCTION APPLIES THIS VALUE TO THE SEARCHFIELD STATE

export default Searchbox;