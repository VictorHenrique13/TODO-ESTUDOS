
"use client"
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react"
import styles from "./app.module.css"
import Logo from "./assets/Logo.png"
import { Tarefas } from "./Components/Tarefas"
function App() {
  const [newTarefa,setNewTarefa] = useState("")
  const [tarefas,setTarefas] = useState(["Dormir o dia todo"])
  const tarefaLenght = newTarefa.length == 0

  function handleCreateNewTarefa(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setTarefas([...tarefas,newTarefa]);
    setNewTarefa("")
    console.log(tarefas)
  }
  function handleChangeTarefa(event:ChangeEvent<HTMLInputElement>){
      setNewTarefa(event.target.value)  
  }

  return (
    <>
      <section className={styles.mainContent}>
          <header className={styles.header}>
                <img src={Logo} alt="logo sistema" />
                <form onSubmit={handleCreateNewTarefa} className={styles.contentInput}>
                  <input type="text" onChange={handleChangeTarefa} value={newTarefa}  placeholder="Adicione uma nova tarefa" />
                  <button disabled={tarefaLenght}>Criar</button>
                </form>
            </header>
            <Tarefas tarefas={tarefas}/>
      </section>
    </>
  )
}

export default App
