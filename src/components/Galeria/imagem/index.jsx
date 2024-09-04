import styled from "styled-components"
import Favoritos from '/icones/favorito.png'
import Expandir from '/icones/expandir.png'



const CardFoto = styled.figure`
width: ${props => props.$expandida ? '90%' : '448px'};
height: 336px;
display: grid;
border-radius: 20px;
margin: 0;
`
const Foto = styled.img`
width: ${props => props.$expandida ? '1040px' : '448px'};
max-width: 100%;
height: ${props => props.$expandida ? '744px' : '256px'};
margin: auto;
border-radius: 20px 20px 0 0 ;

`
const InfoCardFoto = styled.figcaption`
background: #001634;
display: flex;
padding: 0 16px;
height: 80px;
border-radius: 0 0 20px 20px;
align-items: center;
justify-content: space-between;
box-shadow: -1px 3px 4px 0px rgb(0 0 0 / 40%);
h3{
    color: white;
    font-size: 20px;
    font-family: 'GandhiSansBold';
}
h4{
    flex-grow: 1;
    color: white;
    font-size: 16px;
    font-weight: 400;
}
`

const Botoes = styled.div`
display: flex;
gap: 24px;
button{
    background: none;
    border: none;
    cursor: pointer;
}
`
const Imagem = ({ foto, Expandida = false ,aoZoomSolicitado, aoAlternarFavorito }) => {

const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png' 

    return (
        <CardFoto $expandida ={Expandida} >
            <Foto $expandida ={Expandida} src={`${foto.path}`} alt={`${foto.titulo}`} />
            <InfoCardFoto>
                <div>
                    <h3>{foto.titulo}</h3>
                    <h4>{foto.fonte}</h4>
                </div>
                <Botoes>
                    <button onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="" />
                    </button>
                    {!Expandida && <button aria-hidden ={Expandida} onClick={()=> aoZoomSolicitado(foto)}>
                        <img src={Expandir} alt="" />
                    </button>}
                </Botoes>
            </InfoCardFoto>
        </CardFoto>
    )

}

export default Imagem