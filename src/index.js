import React , {useState}from 'react';
import  ReactDOM  from 'react-dom';

const FunctionalComponent = () =>
{
  const [ count , setCount] = useState(0);
  const increase = () =>{
    setCount(count + 1)
  }

  return(
    <div style={{margin : '50px' }}>
      <h1>Welcome to Kaushik</h1>
      <h3>Counter App using Functional Component :</h3>
      <h2>{count}</h2> 
      <button onClick={increase}>Add</button>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionalComponent />
  </React.StrictMode>
);
