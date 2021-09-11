import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <CardComponent text={"Elemento 1"} img={"https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg"}/>
      <CardComponent text={"Elemento 2"} img={"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg"}/>
      <CardComponent text={"Elemento 3"} img={"https://ferreira.vteximg.com.br/arquivos/ids/359471-1000-1000/ch_ichgt78h007.jpg?v=637403536767770000"}/>
    </div>
  );
}

const CardComponent = (props) => {
  return(
    <div>
      <p>{props.text}</p>
      <img src={props.img} ></img>
    </div>
  )
} 

export default App;
