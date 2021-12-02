import {useState, useEffect} from 'react';

function App() {
  const [type, setType] = useState('users');
  const [data, setData]= useState([]);
  const [pos, setPos] = useState({x:0, y:0})

  useEffect(()=>{
    console.log('render')
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
  }, [type])
 
  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('comp did mount')
    window.addEventListener('mousemove', mouseMoveHandler)
    
    //отписка от слушателя
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])
  
  
 
  
  return (
    <div>
        <h1>Source: {type}</h1>
        <button onClick={() => setType('users')}>User</button>
        <button onClick={() => setType('todo')}>Todos</button>
        <button onClick={() => setType('posts')}>Posts</button>

        <pre>{JSON.stringify(pos, null, ' ')}</pre>
        <pre>{JSON.stringify(data, null, ' ')}</pre>
    </div>
  );
}

export default App;
