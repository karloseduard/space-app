import styled from "styled-components"


const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;
const InputSearch = styled.input`
    
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-size: 20px;
    line-height: 20px;
    &::placeholder {
        color: #D9D9D9;
    }
    
`
export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;


 const CampoTexto = ({setBusca}) =>{
    
    return (
        <>
            <ContainerEstilizado>
                <InputSearch placeholder="O que você procura ?" onChange={evento => setBusca(evento.target.value)}></InputSearch>
                <SearchButton>
                    <img src="/icones/Vector.png" alt="icone de search" />
                </SearchButton>
            </ContainerEstilizado>
        </>
    )
}

export default CampoTexto