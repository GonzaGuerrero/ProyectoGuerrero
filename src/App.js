
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import {CartProvider} from './context/CartContext'
function App() {

  return (
    <div className="App">
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </div>
  );
}

export default App;
