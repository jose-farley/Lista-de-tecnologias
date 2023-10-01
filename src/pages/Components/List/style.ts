import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 46rem;
    
    margin: auto;
    
`

export const ContainerInput = styled.div`
    margin-top: -2rem;
    display:flex;
    flex-direction: row;
    justify-content: center;
    vertical-align: center;
    gap: 1rem;
    input:focus {
        outline: 1px solid ${props => props.theme["gray-700"]};
    }
    input{
        padding: 1rem;
        height: 3.375rem;
        width: 39.875rem;
        background-color: ${props => props.theme["gray-500"]};
        border: none;
        border-radius: 8px;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        background-color: ${props => props.theme["blue-dark"]};
        height: 3.25rem;
        width: 5.625rem;
        border-radius: 8px;
        transition: 0.4s;
        cursor: pointer;
        border: none;
        &:not(:disabled){
            background-color: ${props => props.theme.blue}; 
        }
    }
    button:disabled {
        opacity: 0.8;
        background-color: #2b5269; 
        cursor: not-allowed;
        
    }
  

`
export const ContainerTechInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5rem;
    margin-bottom: 2rem;

    span{
        background-color: ${props => props.theme["gray-400"]} ;
        color: ${props => props.theme["gray-200"]} ;
        border-radius: 200px;
        padding: 2px 8px;    
    }

`
export const Created = styled.strong`
    color: ${props => props.theme.blue};
`
export const Done = styled.strong`
   color: ${props => props.theme.purple};
`
 interface TechProps {
    id:string
    status:boolean

 }
