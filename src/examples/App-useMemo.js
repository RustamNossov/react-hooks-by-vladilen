import {useState, useMemo, useEffect} from 'react';

function complexCompute(num) {
  let i = 0
  while (i < 1e9) i++
  return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    // если обернуть функцию то она будет вызываться только при изменениии зависимости
    const computed = useMemo(()=> {
      return complexCompute(number)
    }, [number]);
   
    // можно закэшировать объект
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])
    
    useEffect(()=> {
      console.log('StyleChanged')
    }, [styles])



  return (
    <div>
      <h1 style={styles} >Calculating property: {computed}</h1>
      <button className={'btn btn-success'} 
              onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={'btn btn-success'} 
              onClick={() => setNumber(prev => prev - 1)}>Remove</button>
      <button className={'btn btn-success'} 
              onClick={() => setColored(prev => !prev)}>Change</button>
       
    </div>
  );
}

export default App;
