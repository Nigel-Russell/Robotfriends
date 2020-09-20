import React from 'react';

const Searchbox = ({searchprop})=>{
    return (
        <div className='pa2 '>
        <input className ='pa3 ba b--green bg-lightest-blue' type ='search' placeholder='Search for your robot...' onChange ={searchprop}/>
        </div>
    )
}

export default Searchbox;