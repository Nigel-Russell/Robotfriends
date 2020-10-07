import React from 'react';
import Card from './Card';

const Cardlist = ({myrobots}) => {

 return (
        <div>
        {      
            myrobots.map((robotsfrommylist, index) => {
              return <Card key={index} id={myrobots[index].id} name={myrobots[index].name} email={myrobots[index].email}/>
            }) 
        }
        </div>
   );
}

//CARDLIST IS PASSED MYROBOTS PROP CONTAINING THE LIST OF FILTEREDROBOTS
//THESE ROBOTS ARE RAN THROUGH A MAP FUNCTION AND RETURN AS A CARD 
//INDEX (SECOND PARA IN MAP FUNCTION) IS NEEDED TO LOOP THROUGH THE LIST FROM START (0) TO FINISH 
//CARD PROPS CALLED "KEY ID NAME AND EMAIL" WHICH CONTAIN VALUES OF THE FILTERED ROBOTS .NAME .ID and .EMAIL WHICH ARE ALL ARE PASSED TO CARD
//CARD IS MADE AND PASSED BACK TO CARDLIST WHICH IS PASSED BACK TO APP 

export default Cardlist;