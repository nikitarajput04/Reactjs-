import { useCallback, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%&*(){}[]~`';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-6 text-orange-500 bg-gray-700 my-6'>
      <h1 className='text-white text-center text-xl font-bold mb-4'>
        PASSWORD GENERATOR
      </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3'
          placeholder='Password'
          readOnly
        />
        <button
          onClick={passwordGenerator}
          className='bg-orange-500 text-white px-3 font-semibold'
        >
          Generate
        </button>
      </div>

      <div className='flex flex-col gap-3 text-white'>
        <div className='flex items-center justify-between'>
          <label htmlFor="length">Password Length: {length}</label>
          <input
            type="range"
            id="length"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer'
          />
        </div>

        <div className='flex items-center justify-between'>
          <label htmlFor="numbers">Include Numbers</label>
          <input
            type="checkbox"
            id="numbers"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>

        <div className='flex items-center justify-between'>
          <label htmlFor="characters">Include Special Characters</label>
          <input
            type="checkbox"
            id="characters"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
