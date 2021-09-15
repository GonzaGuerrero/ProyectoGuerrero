
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="tienda">
        <CardComponent text={"Elemento 1"} img={"https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg"}/>
        <CardComponent text={"Elemento 2"} img={"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg"}/>
        <CardComponent text={"Elemento 3"} img={"https://i.redd.it/4fop1ishv1x21.jpg"}/>
        <CardComponent text={"Elemento 4"} img={"https://ih1.redbubble.net/image.294035230.6500/ssrco,slim_fit_t_shirt,womens,101010:01c5ca27c6,front,square_product,600x600.u5.jpg"}/>
        <CardComponent text={"Elemento 5"} img={"https://ih1.redbubble.net/image.1325033258.5128/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg"}/>
        <CardComponent text={"Elemento 6"} img={"https://img.joomcdn.net/0b3a4de070c7b5a1173380b2a874488c2fa55f36_original.jpeg"}/>


      </div>
    </div>
  );
}

const CardComponent = (props) => {
  return(
    <div className="tienda-item">
      <p>{props.text}</p>
      <img src={props.img} ></img>
    </div>
  )
} 

export default App;
