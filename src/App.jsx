import { useState } from "react";
import "./App.css";
import Button from './components/Button/Button';
import ShowCount from "./components/ShowCount/ShowCount";

function App () {
  const [counter, setCounter] = useState(0);
  
    return (
      <div>
      <ShowCount contar={counter} />

     <div className="buttonSection">

      <Button 
      funcion={()=> setCounter(counter - 1)}
      type="primary"
      >RESTAR</Button> 
  
      <Button
      funcion={()=> setCounter (counter + 1)} 
      type="secondary"
      >SUMAR</Button>
      </div>
    </div>
    )
}

export default App;
