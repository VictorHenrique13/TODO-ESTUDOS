import { ClipboardText, Strategy, Trash } from "@phosphor-icons/react"
import styles from "./tarefas.module.css"
import { useState } from "react";
interface propsTarefas{
    tarefas: string[];
    onDeleteAtividade: (item:string) => void;
    total: number
}
export function Tarefas({tarefas, onDeleteAtividade, total}:propsTarefas){
    const [listCheck,setListCheck] = useState(0)

    function handleDelete(itemDeleted:string){
            const deleted = listCheck
            onDeleteAtividade(itemDeleted)
            if(deleted == 0){
                setListCheck(0)
            }else{
                setListCheck(deleted - 1)
            }
            
    }
    function handleCheckChange(){
        const item = listCheck
        setListCheck(item+1)
        

    }
    return(
        <div className={styles.mainContainer}>
            <header className={styles.contentTab}>
                <strong>Tarefas Criadas <span>{total}</span></strong>
                <strong>Tarefas Concluídas <span>{listCheck + ' de '+ total}</span></strong>
            </header>
            <section className={styles.listTarefas}>
                {tarefas.length === 0 ? (
                    <div className={styles.semDados}>
                        <ClipboardText size={58}/>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                ): (<>
                    {tarefas.map((item,index)=>{
                        return (
                            <div key={index} className={styles.containerTarefas}>
                                <input onChange={handleCheckChange} className={styles.teste} type="radio"/>
                                <p>{item}</p>
                                <Trash onClick={()=> handleDelete(item)} size={24}/>
                            </div>
                        )
                    })}
                </>)}

            </section>
        </div>
    )
}