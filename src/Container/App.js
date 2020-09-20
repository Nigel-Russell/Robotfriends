import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
// import { robots } from './Robots'; Don't need old robot array as using API link via fetch
import './App.css'
import Scroll from '../Components/Scroll';


class App extends Component {
  constructor() {
    super();

    this.state = {
      myrobotsforyou: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({myrobotsforyou: users}));
  };

 onsearchchange = (event) => {
   this.setState({searchfield: event.target.value})
 };

  render(){
    const {myrobotsforyou, searchfield} = this.state;  //usually it the below to use state needs this.state however this is destructed to allow a cleaner code

    const filteredrobots = myrobotsforyou.filter(thisrobot=>{
      return thisrobot.name.toLowerCase().includes(searchfield.toLowerCase());
   })

   return myrobotsforyou.length === 0 ?  //replaced if else statement with a terny operator condition ? option 1 : option 2
   <h1 className ='lightest-blue f2 tc'>Hold up a second, I'm still Loading</h1> :

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
