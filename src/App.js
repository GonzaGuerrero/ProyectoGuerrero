import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <CardComponent text={"Elemento 1"} img={"https://lh3.googleusercontent.com/proxy/bxKVr9bGbb0XYK0-4Qxdfd7FK1nZED3ju4iSn8ziVtMOeTlNyG6Ux1DU8u-azJncONGE-qAdhtOTl5awlXAR2qo0qzM3MDW3Hx7l1Y0DgNUs7REw7gY"}/>
      <CardComponent text={"Elemento 2"} img={"https://lh3.googleusercontent.com/proxy/HxDeW4u-bfHU7_-LBiVmagzFBNCozzNSzvmbCnjc6MG_kVEVf2wgGmqPQTc7SL_BQZsAHt_PXkTBgB5wQ98edTMgJEO-619VGchsnLQpRY4p4YfcvIc"}/>
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
