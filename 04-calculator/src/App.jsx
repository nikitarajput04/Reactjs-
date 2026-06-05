import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
  const [operator, setOperator] = useState("")
const[result,setResult]=useState(null)
const calculate=()=>{
  const a=parseFloat(num1)
    const b =parseFloat(num2)
    if (isNaN(a)|| isNaN(b)){
      setResult("invalid operator")
      return
    }


 switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        if (b === 0) {
          setResult('Error: Division by zero');
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult('Invalid operator');
    }
}

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-6 text-black-500 bg-pink-300 my-6'>
     <div style={{  padding:'30px', textAlign:"center"} } > 
      <h2 class className="shadow-md rounded-lg px-5 py-3 bg-pink-200 text-black"> ARITHMATIC OPERATION CALCULATOR</h2>
      <input
      type="text"
      placeholder='First Number'
      value={num1}
      onChange={(e)=>setNum1(e.target.value)}
       className="m-2 p-2 rounded-lg shadow-md bg-pink-500 text-center "
      />
       <select value={operator} onChange={(e) => setOperator(e.target.value)} className='text-black text-center text-2xl  rounded-lg shadow-md bg-pink-500'> 
        <option value="">--Select--</option>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
       <input
      type="text"
      placeholder='Second Number'
      value={num2}
      onChange={(e)=>setNum2(e.target.value)}
                  className="m-2 p-2 rounded-lg shadow-md bg-pink-500 text-center"

      />
       <br /><br />
      <button onClick={calculate} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Calculate</button>
      <h3  className="mt-4 text-lg m-15 p-2 rounded-lg shadow-md bg-pink-500">Result: {result !== null ? result : '—'}</h3>
     </div>
     </div>
    </>
  )
}

export default App
