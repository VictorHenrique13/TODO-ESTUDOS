import styles from "./tarefas.module.css"
interface propsTarefas{
    tarefas: String[]
}
export function Tarefas({tarefas}:propsTarefas){
    return(
        <div className={styles.mainContainer}>
            <header className={styles.contentTab}>
                <strong>Tarefas Criadas <span>0</span></strong>
                <strong>Tarefas Concluídas <span>0</span></strong>
            </header>
            <div className={styles.semDados}>
                teste
            </div>
        </div>
    )
}