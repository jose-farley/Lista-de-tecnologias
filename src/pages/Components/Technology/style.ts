import styled from "styled-components";


export const TechnologyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding:1rem;
    height: 4.5rem;
    width: 46rem;
    margin-bottom: 0.8rem;
    background-color: ${props => props.theme["gray-500"]};
    
    span{
        cursor: pointer;
    }
    s{
        color:  ${props => props.theme["gray-300"]};
    }
`

export const SelectDisabled = styled.div`
    cursor: pointer;
    border: 3px solid ${props => props.theme.blue};
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${props => props.theme["gray-500"]};
    border-radius: 200px;
    transition: 0.4s;
`

export const SelectActived = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${props => props.theme["purple-dark"]};
    border-radius: 200px;
    transition: 0.4s;
`