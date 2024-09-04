import styled from "styled-components"
import Titulo from "../../Titulo"
import fotosPopulares from './fotosPopulares.json'

const PopularesContainer = styled.section`
flex-grow: 1;
display: flex;
flex-direction: column;
gap: 24px;
`
const CardPopulares = styled.img`
width: 212px;
height: 158px;
border-radius: 10px;
`
const ButaoVerMais = styled.button`
width: 208px;
height: 56px;
border: #C98CF1 solid 2px;
border-radius: 10px;
background-color: transparent;
color: white;
font-size: 20px;
text-align: center;
`

const Populares = ()=>{
    
    return(
        <PopularesContainer>
        <Titulo $alinhamento = 'center'>Populares</Titulo>

        {fotosPopulares.map(fotos => <CardPopulares key={fotos.id} src={fotos.path} alt="" />)}
        <ButaoVerMais>Ver Mais</ButaoVerMais>
        </PopularesContainer>
        
    )
    
}

export default Populares