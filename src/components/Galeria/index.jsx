import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./imagem"

const GaleriaContainer = styled.div`
    display: flex;
    
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const UlGaleria = styled.div`
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], aoFotoSelecionada, aoAlternarFavorito,aoVerificacao}) => {
    return (
        <>
            <Tags aoVerificacao={aoVerificacao}/>
            <GaleriaContainer >
                <SecaoFluida >
                    <Titulo>Navegue pela galeria</Titulo>
                    <UlGaleria  >
                    {fotos.map(foto => <Imagem aoZoomSolicitado ={aoFotoSelecionada}foto={foto} key={foto.id} aoAlternarFavorito = {aoAlternarFavorito}></Imagem> )}

                    </UlGaleria>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}
export default Galeria