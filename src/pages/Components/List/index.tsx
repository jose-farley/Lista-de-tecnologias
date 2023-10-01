import {PlusCircle, Trash} from '@phosphor-icons/react'
import { ContainerInput, ContainerTechInfo, Created, Done, ListContainer } from './style'
import { useState } from 'react'
import nextId from "react-id-generator";
import { Technology } from '../Technology';

interface TechnologyToStudy {
    id:string,
    content:string, 
    status:boolean 
}

export function List(){
    //useStates---------------------------------------------------------------
    const [typedTechnology, setTypedTechnology] = useState<string>("")
    const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true)
    const [technologiesToStudy, setTechnologiesToStudy] = useState<TechnologyToStudy[]>([])
    const [technolgiesStudied, setTechnologiesStudied] = useState<TechnologyToStudy[]>([])
    //Functions----------------------------------------------------------------
    function actionTypingTechnology(event:React.ChangeEvent<HTMLInputElement>){
        (event.target.value)?setButtonIsDisabled(false):setButtonIsDisabled(true)
        setTypedTechnology(event.target.value)
    }
    function handleInsertTechnology(event: React.MouseEvent<HTMLButtonElement>){
            countTechnologiesStudied([...technologiesToStudy, {id: nextId(), content: typedTechnology, status:false}])
            setTechnologiesToStudy([...technologiesToStudy, {id: nextId(), content: typedTechnology, status:false}])

    } 
    function hadnleRemoveTechnology(techToDelete:string){   
        const technolgiesWithoutTheDeletedOne = technologiesToStudy.filter(tech =>{
            if(tech.id != techToDelete) return tech
        })
        countTechnologiesStudied(technolgiesWithoutTheDeletedOne)
        setTechnologiesToStudy(technolgiesWithoutTheDeletedOne)
    } 
    function switchStatus(id:string){
        const tecnologiesUpdated = technologiesToStudy.filter(tech => {
            if(tech.id == id) {
                tech.status = !tech.status
            }
            return tech
        })
        countTechnologiesStudied(tecnologiesUpdated)
        setTechnologiesToStudy(tecnologiesUpdated)
    } 
    function countTechnologiesStudied(techs:TechnologyToStudy[]){
        const onlyTechnologiesStudied = techs.filter(tech =>{
            if(tech.status==true) return tech
        })
        setTechnologiesStudied(onlyTechnologiesStudied);
    }
    //Body----------------------------------------------------------------------
    return (
        <ListContainer>
            <ContainerInput>
                <input type="text" onChange={actionTypingTechnology} placeholder="Adicione uma nova tecnologia" />
                <button disabled={buttonIsDisabled} type='button' onClick={handleInsertTechnology}> Criar <PlusCircle size={26}/></button>
            </ContainerInput>

            <ContainerTechInfo>
                <Created>Tecnologias criadas <span>{technologiesToStudy.length}</span></Created>
                <Done>Concluidas <span>{technolgiesStudied.length}</span></Done>
            </ContainerTechInfo>
            
            {
                technologiesToStudy.map(tech => {
                    return (
                       <Technology 
                        content={tech.content}
                        id={tech.id}
                        status={tech.status}
                        key={tech.id}
                        switchStatus={switchStatus}
                        removeTech={hadnleRemoveTechnology}
                        />
                    )
                })
            }
        </ListContainer>
    )
}