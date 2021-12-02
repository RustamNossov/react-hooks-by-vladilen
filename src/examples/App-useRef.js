import {useState, useEffect, useRef} from 'react';

function App() {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1);
  const inputRef = useRef(null); //так можно получать объект дом дерева
  const prevValue = useRef('');

  // useRef - сохраняет состояния но не вызывает перерисовку объекта
  useEffect(()=> {
    renderCount.current++;
    console.log(inputRef.current)
  })

  //часто используется для установки фокуса
  const focus = () => inputRef.current.focus()

  // часто используется для сохраннения предыдущего состояния
  useEffect(()=>{
    prevValue.current = value;
  }, [value])
  
  return (
    <div>
      
       <h1>Amount of renders: {renderCount.current}</h1>
       <h2>Previous condition: {prevValue.current}</h2>
       <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
       <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
