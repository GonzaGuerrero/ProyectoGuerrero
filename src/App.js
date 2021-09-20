
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
import ListProducts from './components/ListProducts/ListProducts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListProducts/>
    </div>
  );
}

export default App;
