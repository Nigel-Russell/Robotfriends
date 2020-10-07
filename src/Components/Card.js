import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className = 'bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
        </div>
    )
}
export default Card;

//RECEIVES PROP NAME EMAIL AND ID FROM CARDLIST 
//THIS PROPS CONTAIN MAPPED MYROBOT PROP .NAME .EMAIL .ID VALUES
//EXPORTS BACK WITH NAME EMAIL AS A CARD 