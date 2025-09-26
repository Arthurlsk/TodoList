import { useState } from "react";
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
gap:15px;
width: 25vw;
padding:20px;

`

const Botao = styled.button`
border-radius: 8px;
padding:4px;
cursor: pointer;
font-family: 'Roboto'
background-color: #0056a0;
border: 1px solid #ff9500;
width: 25%;
align-self:center;



 &:hover {
    background-color: #004080;
    color:white;
  }


`

const Input = styled.input`
border-radius: 6px;
margin-top:15px;
padding:8px;
width: 50%;
border: 1px solid #66a7e0ff;
`

const Label = styled.label`
font-size: 22px;
align-items:center;
display:flex;
flex-direction:column;
font-family: 'Roboto';
margin-top:15px;



`

const TodoForm = ({ adicionarTarefa }) => {
  const [salvarTarefa, setSalvarTarefa] = useState("");
  return (
    <Form

      onSubmit={(e) => {
        e.preventDefault();
        adicionarTarefa(salvarTarefa)
        setSalvarTarefa("")

      }}

    >
      <Label>
        Digite sua tarefa:
        <Input
          value={salvarTarefa}
          type="text"
          placeholder="Digite aqui"
          onChange=
          {(e) => setSalvarTarefa(e.target.value)}
        >
        </Input>
      </Label>

      <Botao
        type="submit"
      >
        Enviar
      </Botao>

    </Form>



  )
}


export default TodoForm;