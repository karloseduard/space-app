import styled from 'styled-components'
import tags from './tags.json'

    const TagContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top:56px ;
    align-items: center;
    h3{
        font-size: 24px;
        font-weight: 500;
        color: white;
    }
    `

    const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    `
    
const Tags = ({aoVerificacao})=>{

    return(
        <TagContainer>
        <h3>Busca por tags:</h3>
        {tags.map(tag => <Tag onClick={e => aoVerificacao(e.target.value)} key={tag.id} value={tag.tag}>{tag.titulo}</Tag>)}
        </TagContainer>
        
    )
}

export default Tags