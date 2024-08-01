import './App.css';
import samosaImage from './assets/samosa.png';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count:</h2>
        <img src={samosaImage} alt="Samosa" />
      </div>
    </div>
  )
}

export default App