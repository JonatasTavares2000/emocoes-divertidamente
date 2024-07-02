import './App.css'
import CatalogoEmocao from "./CatalogoEmocao"
import ItemEmocao from './ItensEmocao';
import alegria1 from './img/alegria1.png';
import inveja from './img/inveja.png';
import medo from './img/Medo.png';
import nojo from './img/nojo.png';
import raiva from './img/Raiva.png';
import tedio from './img/tedio.png';
import tristeza from './img/Tristeza.png';
import ansiedade from './img/ansiedade.png';
import vergonha from './img/vergonha.png';

function App () {
 
const catalagoEmocao = [
    {nome:'ALEGRE',imagem: alegria1, cor: 'fff58b'},
    {nome:'ANSIEDADE', imagem: ansiedade, cor:'ef7826'},
    {nome:'RAIVA',imagem: raiva, cor:'red'},
    {nome:'TRISTEZA',imagem: tristeza, cor:'#a8dbfa'},
    {nome:'MEDO',imagem: medo, cor: '#d0b0d9'},
    {nome:'INVEJA',imagem: inveja, cor: 'turquoise'},
    {nome:'TÉDIO',imagem: tedio, cor:'#3a4193'},
    {nome:'NOJO',imagem: nojo, cor:'#96c263'},
    {nome:'VERGONHA', imagem: vergonha, cor:'pink'}
  ];
 
 
  return (
    <>
      <CatalogoEmocao
        titulo="COMO VOCÊ ESTÁ SE SENTINDO HOJE?"
        catalagos={catalagoEmocao}
      />
    </>
  )
}
 
export default App;
