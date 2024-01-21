import Chai from "./chai"
import { useState } from "react";
function App() {


  let [counter, setCounter ] = useState(15);

  const addValue = ()=>{
    console.log("clicked",counter);
    if(counter < 20 )
    setCounter(counter+1);
    else 
    setCounter(counter);
  }
  const removeValue = ()=>{
    console.log("clicked",counter);
    if(counter > 0 )
    setCounter(counter-1);
    else 
    setCounter(counter);

  }
  return (
    <>
    <Chai />
    <p>test para</p>
    {/* counter = 15 */}

    <h1>Counter Value : {counter}</h1>
    <button onClick={addValue}>
      Add Value {counter}
    </button>
    <br/>
    <br/>
    <br/>
    <button onClick={removeValue}>     
      Remove Value {counter}
    </button>
    </>
  )
}

export default App


/** UI mein ek saath bahut saari jagah par update Hooks ke help se kiya jaa sakta hai 
 * let [counter, setCounter ] = useState(15);
 * yahan pe React ek feature deta hai ki hooks se sarre jagah pe changes kiye jaa sakte hai
*/