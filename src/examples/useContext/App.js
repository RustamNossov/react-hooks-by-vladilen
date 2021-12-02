import {useState, useCallback, createContext} from 'react';
import Alert from './examples/alert/Alert';
import Main from './main';
import { AlertProvider } from './examples/alert/AlertContext';

function App() {



  return (
    <AlertProvider>
        <div className='container pt-3'>
            <Alert/>
            <Main toggle={()=>{}}/>
            
        </div>
    </AlertProvider>
  );
}

export default App;
