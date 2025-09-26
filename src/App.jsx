import styled from "styled-components"
import { useState, useEffect } from "react"
import TodoForm from "./components/TodoForm.jsx"
import TodoLista from "./components/TodoLista.jsx"


const Main = styled.main`
background: rgb(0,127,255);
background: linear-gradient(159deg, rgba(0,127,255,1) 0%, rgba(42,82,190,1) 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 6px;
flex-direction:column;
gap:15px;




`;

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([])

  const adicionarTarefaLista = (tarefa) => {
    setListaDeTarefas([...listaDeTarefas, tarefa])

  }

  useEffect(() => {
    console.log("Lista atualizada:", listaDeTarefas)
  }, [listaDeTarefas])

  const removerTarefa = (tarefa) => {
    setListaDeTarefas(listaDeTarefas.filter(item => item !== tarefa))
  }


  return (
    <Main>
      <TodoForm adicionarTarefa={adicionarTarefaLista} />
      <TodoLista lista={listaDeTarefas} remover={removerTarefa} />
    </Main>
  )
}

export default App

