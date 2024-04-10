import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Carrosel from 'react-elastic-carousel'
import './styles.css'

export default function App() {

    const [item, setItem] = useState([])

    const pegarDados = async () =>{
      const Dados = await axios.get("https://rickandmortyapi.com/api/character")
    
      console.log(Dados.data.results)
        
      setItem(Dados.data.results)
    }
    useEffect(()=>{
      pegarDados()
    },[])

     //Menu
   const [menu, setMenu] = useState(false);


    const quantidade = [
        { width: 1, itemsToShow: 1 }]
        

  return (
    <>
   <header>
        <h2>Menu Show</h2>
        <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
      </header>
      {/* O operador AND (&&) em JavaScript
      Eles permitem realizar operações de comparação e combinação de valores booleanos */}
      {menu && (
        <>
          <ul>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Produtos</li>
          </ul>
        </>
      )}

    <div class="box">
      <Carrosel breakPoints={quantidade}>
      {item.map((item)=>(
          <div class="card">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.species}</p>
          </div>
      ))}
      </Carrosel>
    </div>
    </>
  )
}
