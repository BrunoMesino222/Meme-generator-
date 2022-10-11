import { useState } from "react";
import './App.css';
import html2canvas from "html2canvas";

function App() {
  
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [img, setImg] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  
  const onChangeImg = function (evento) {
    setImg(evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      alert("exportando");
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
  });
  }
  
  return (
    
    <div className="App">
      <select onChange={onChangeImg}>
        <option value="Bob">Bob</option>
        <option value="Gato">Gato</option>
        <option value="Pepe">Pepe</option>
        <option value="Philosoraptor">Philosoraptor</option>
        <option value="Toy story">Toy story</option>
      </select>

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className="memeContainer" id="meme">
        <span className="linea1">{linea1}</span>
        <span className="linea2">{linea2}</span>
        <img src={"/img/" + img + ".jpg" } />
      </div>

    </div>
  );
}

export default App;
