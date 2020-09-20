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

export default Cardlist;