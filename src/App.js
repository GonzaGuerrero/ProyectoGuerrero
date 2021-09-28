
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
