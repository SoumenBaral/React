import logo from './logo.svg';
import './App.css';

const nayoks = ['bapparaj','sorifulRaj','Shakib khan','Rajjak ', 'kubear']
function App() {
  return (
    <div className="App">
      {
        nayoks.map(nayok=><Person name={nayok}></Person>)
      }
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
        <p>Profession: Fighting For me </p>
  </div>
  )
}
export default App;
