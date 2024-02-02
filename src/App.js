import './App.css';
import React,{useState} from 'react'

function App() {

  let [val,getval] = useState('');
  let [ans,getans] = useState('');
  let [call,getcall] = useState('');

  const result = (e) => {
    getval(val + e.target.value);
  }
  const clear = () => {
    getval('');
  }
  const cal = (e) => {
    getans(val);
    getcall(e.target.value);
    getval('');
  }
  const equal =() => {
    if(call === '+'){
      getval(parseFloat(ans) + parseFloat(val));
    }else if(call === '-'){
      getval(parseFloat(ans) - parseFloat(val));
    }else if(call === '*'){
      getval(parseFloat(ans) * parseFloat(val));
    }else if(call === '/'){
      getval(parseFloat(ans) / parseFloat(val));
      if(+val !== 0){
        getval(parseFloat(ans) / parseFloat(val));
      }else{
        getval("Can't divided by Zero")
      }
    }
  }
  const clearone = () => {
    getval(val.substring(0,val.length-1));
  }
  return (
    <>
    {/* <h1>{ans}</h1> */}
    {/* <h1>{call}</h1> */}
      <div class="box">
        <div class="container">
          <div class="screen">
            <input type="text" placeholder='0' name="" value={val} readonly />
          </div>
          <div class="keybord">
            <div class="keypad">
              <input type="button" onClick={clearone} value="C" class="key orange"></input>
              <input type="button" onClick={clear} value="AC" class="key orange"></input>
            </div>
            <div class="keypad">
              <input type="button" value="7" class="key" onClick={result}></input>
              <input type="button" onClick={result} value="8" class="key"></input>
              <input type="button" onClick={result} value="9" class="key"></input>
              <input type="button" onClick={cal} value="/" class="key"></input>
            </div>
            <div class="keypad">
              <input type="button" onClick={result} value="4" class="key"></input>
              <input type="button" onClick={result} value="5" class="key"></input>
              <input type="button" onClick={result} value="6" class="key"></input>
              <input type="button" onClick={cal} value="*" class="key"></input>
            </div>
            <div class="keypad">
              <input type="button" onClick={result} value="1" class="key"></input>
              <input type="button" onClick={result} value="2" class="key"></input>
              <input type="button" onClick={result} value="3" class="key"></input>
              <input type="button" onClick={cal} value="-" class="key"></input>
            </div>
            <div class="keypad">
              <input type="button" onClick={result} value="." class="key"></input>
              <input type="button" onClick={result} value="0" class="key"></input>
              <input type="button" onClick={cal} value="+" class="key"></input>
              <input type="button" onClick={equal} value="=" class="key red"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
