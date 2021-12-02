import {useState} from 'react';

function computeInitialCounter() {
console.log('func')
return Math.trunc(Math.random() * 20)
}
function App() {
  // функция передается в анонимную функцтю. Тогда она будет вызываться только при создании 
  //компонента. Не будет вызова при изменении стейта
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)
    // setCounter(counter + 1)

// если нужно несколько раз изменить один стейт необходимо использовать коллбак
    setCounter(counter + 1)
    setCounter(prevCounter => {
      return prevCounter + 1
    })
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updadeTitle() {
    setState(prev => {
      return {
        ...prev,
        title: "newTitle"
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className='btn btn-success'>Add</button>
      <button onClick={decrement} className='btn btn-danger'>Remove</button>
      <button onClick={updadeTitle} className='btn btn-danger'>Change name</button>


      <pre> {JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
