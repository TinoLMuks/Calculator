import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <form action="" method="">
          <div className="textdis">
            <input type="text" value={value}/>
          </div>
          <div>
           <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
           <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
           <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
           <input type="button" value="DEL" id='del' onClick={e => setValue(value.slice(0, -1))} />
           <input type="button" value="AC" id='ac' onClick={e => setValue('')}/>
          </div>
          <div>
          <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
          <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
          <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="+/-" onClick={e => setValue(value + e.target.value)}/>
          <input type="button" value="=" id='equal' onClick={e => setValue(eval(value))} />
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default App
