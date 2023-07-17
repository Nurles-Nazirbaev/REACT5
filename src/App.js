import { useEffect, useState } from 'react';
import './App.css';
import Form from './Componets/Form';

function App() {

  const [state, setState]=useState(true)
  const [array, setArray] = useState([])

  const addHandler=()=>{
    setState((prev)=>!prev)
  }

  const getData = ()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data)=>{
      return data.json()
    })
    .then((res)=>{
      console.log(res);
      setArray(res)
    })
  }
  useEffect(()=>{
    
    if(state === false){
      
      setTimeout(() => getData(), 5000);
    }
  },[state])

  return (
    <div className="App">
     <button onClick={addHandler}>Add</button>
      {
        array.map(el=>{
          return <Form name={el.name}/>
        })
      }
    </div>
  );
}

export default App;
