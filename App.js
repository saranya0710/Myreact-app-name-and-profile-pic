
import './App.css';

function App() {

  const names = [{name:"Saranya",img:"https://i.pinimg.com/736x/aa/42/7a/aa427a67d5dc8bc31629fbe50cc62abd.jpg"},
{name:"Nishanth",img:"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
{name:"Goku",img:"https://static.toiimg.com/thumb/msid-56833673,width-1200,height-900,resizemode-4/.jpg"},
{name:"Chichi",img:"https://sportshub.cbsistatic.com/i/2021/03/18/a1be6cf6-9ef1-4ced-b146-6b6a751b4ef4/dragon-ball-chi-chi-1208872.jpg"}]
  return (
    <div className="App">
      {names.map((person)=>(<Msg name={person.name} img={person.img} />))}
    </div>
  );
}
function Msg(props){
  const name = props.name
  const img = props.img
  console.log(props)
  return (
<div>
  <img height="100" src={img}/>
  <h1> hi, {name}</h1>
  </div>
  )
}

export default App;
