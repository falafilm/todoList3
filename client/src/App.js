import './App.css';

//import component header
import Header from './components/Header';
import Todoform from './components/Todoform';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Todoform/>
      <Todos/>
    </div>
  );
}

export default App;
