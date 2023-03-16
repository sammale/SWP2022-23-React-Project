import logo from './logo.svg';
import './App.css';
import Button_Zeiger from './components/Zeiger';
import UhrEinzeln from './components/Zeiger';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    function rotation() {
      document.querySelector("#rotate").addEventListener('click', function() {
        document.querySelector("#sample").classList.add('rotating')
      });
    }

  }, [])

  return (
    <div className="App">
      <header className="App-header">
      
          <UhrEinzeln>
          </UhrEinzeln>
      </header>
    </div>
  );
}


export default App;
