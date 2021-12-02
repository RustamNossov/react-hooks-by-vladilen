import {useState, useCallback} from 'react';
import ItemsList from './import';


function App() {
    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
      color: colored ? 'darkred' : 'black'
    }

    // работатет по аналогии с useMemo, но кэширует(возвращает) не результат функуии а саму функцию
    const genereteItemsFromAPI = useCallback((indexNumber) => {
      return new Array(count).fill('').map((_, i) => `Element ${i+indexNumber}`)
    }, [count])

    
  return (
    <div>
      <h1 style={styles} >Amount of elements: {count}</h1>
      <button className={'btn btn-success'} 
              onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className={'btn btn-warning'} 
              onClick={() => setColored(prev => !prev)}>Change color</button>
      
      <ItemsList getItems={genereteItemsFromAPI}/>
    </div>
  );
}

export default App;
