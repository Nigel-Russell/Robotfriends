import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
// import { robots } from '../Components/Robots'; //Don't need old robot array as using API link via fetch
import './App.css'
import Scroll from '../Components/Scroll';


class App extends Component {
  constructor() {
    super();
    
  //CREATE THIS.STATE TO ASSIGN THE CHANGING VARIABLES

    this.state = {                           
      myrobotsforyou: [],
      searchfield: ''
    }
  }

  componentDidMount(){

//THIS.SETSTATE ASSIGNS A VALUE TO MYROBOTSFORYOU STATE

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({myrobotsforyou: users}));   
  };

 //THIS.SETSTATE ASSIGNS A VALUE TO SEARCHFIELD STATE

 onsearchchange = (event) => {
   this.setState({searchfield: event.target.value}) 
 };

  render(){

//DECONSTRUCTED THIS.STATE OBJECT TO ALLOW CLEANER CODE

    const {myrobotsforyou, searchfield} = this.state; 

//FILTEREDROBOT VARIABLE BELOW HOUSES MYROBOTFORYOUSTATE FILTERED TO MATCH SEARCHFIELDSTATE

    const filteredrobots = myrobotsforyou.filter(thisrobot=>{
      return thisrobot.name.toLowerCase().includes(searchfield.toLowerCase());   
   })

   return myrobotsforyou.length === 0 ? 
   <h1 className ='lightest-blue f2 tc'>Hold up a second, I'm still Loading</h1> : 

// SECTION BELOW PASSES THIS.ONSEARCHCHANGE VIA SEARCHPROP TO SEARCHBOX COMPONENT
//AND PASSES FILTEREDROBOTS VIA MYROBOTS PROP TO CARDLIST COMPONENT

   (
      <div className = 'tc'>
        <h1 className='lightest-blue f2'>Robotfriends</h1>
        <Searchbox searchprop = {this.onsearchchange}/>   
        <Scroll>
            <Cardlist myrobots = {filteredrobots}/> 
        </Scroll>
      </div>
    );
   

  }   
}
export default App;
