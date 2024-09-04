import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from './db.json'
import { useEffect, useState } from "react"
import MadalZoom from "./components/ModalZoom"
import Rodape from "./components/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
display: flex;
gap: 24px;
`
const ConteudoDaGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

function App() {

  const [FotosDaGaleria,setFotosDaGaleria ] = useState(fotos.fotos)
  const [FotoSelecionada, setFotoSelecionada] = useState(null)
  const [Busca, setBusca] = useState('')
  const [ImgFiltrada, setImgFiltrada] = useState('')

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/karloseduard/SpaceApp_Api/fotos?titulo="+Busca).
    then(resp => resp.json()).
    then(dados => setFotosDaGaleria(dados))
  }, [Busca])

  const aoVerificacao =(idTag)=>{
    setImgFiltrada(idTag)
    
      }

  useEffect(()=>{
    ImgFiltrada ? fetch("https://my-json-server.typicode.com/karloseduard/SpaceApp_Api/fotos?tagId=" + ImgFiltrada) .
    then(resp => resp.json()).
    then(dados => setFotosDaGaleria(dados))
    : fetch("https://my-json-server.typicode.com/karloseduard/SpaceApp_Api/fotos" ) .
    then(resp => resp.json()).
    then(dados => setFotosDaGaleria(dados))
  },[ImgFiltrada])

  const aoAlternarFavorito = (foto)=>{
    if(foto.id === FotoSelecionada?.id){
      setFotoSelecionada(
        {
        ...FotoSelecionada,
        favorita: !FotoSelecionada.favorita
      }
      )
    }
    setFotosDaGaleria(FotosDaGaleria.map(fotoDaGaleria =>{
      return{
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    } ))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setBusca={setBusca}/>
        
        <MainContainer>
          <BarraLateral />
          <ConteudoDaGaleria>
            <Banner texto='A galeria mais completa de fotos do espaço!' />
            <Galeria key={FotosDaGaleria.tagId} aoFotoSelecionada = {foto => setFotoSelecionada(foto)} aoAlternarFavorito = {aoAlternarFavorito} fotos = {FotosDaGaleria} aoVerificacao={aoVerificacao}/>
          </ConteudoDaGaleria>
        </MainContainer>
      </AppContainer>
 
      <MadalZoom foto={FotoSelecionada} aoFechar={()=> setFotoSelecionada(null)} aoAlternarFavorito ={aoAlternarFavorito}/>
      <Rodape/>
    </FundoGradiente>
    
  )
}

export default App
