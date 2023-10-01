import { SelectActived, SelectDisabled, TechnologyContainer } from "./style"
import {Check, Trash} from "@phosphor-icons/react"
interface props {
    id:string 
    content:string 
    status:boolean 
    removeTech(id:string):void
    switchStatus(id:string):void
}


export function Technology({id, content, status, removeTech, switchStatus}:props){
    
   
    return(
        <TechnologyContainer>
            {
               status?
               <SelectActived onClick={()=>{switchStatus(id)}}><Check size={16}/></SelectActived>
               :<SelectDisabled onClick={()=>{switchStatus(id)}} />
            }
            {
                (status)?<s>{content}</s>:<p>{content}</p>
            }
            <span><Trash size={24} onClick={()=>{removeTech(id)}} /></span>
        </TechnologyContainer>
    )
}