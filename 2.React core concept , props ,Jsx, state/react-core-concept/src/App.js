import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name='soumen'></Person>
      <Person name='shuvo'></Person>
      <Person name='Shakib al Hassan'></Person>
      <Friend></Friend>
    </div>
  );
}
function Person ({name}){
  return(
    <div className='person'>
        <h1> {name}</h1>
        <p>Profession: Cricketer</p>
  </div>
  )
}
function Friend (){
  return(
    <div className='person'>
        <h1>Ajoy Devgon </h1>
        <p>Profession: Fighting</p>
  </div>
  )
}
export default App;
