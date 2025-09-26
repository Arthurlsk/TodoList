import styled from 'styled-components'

const Ul = styled.ul`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;


`
const Li = styled.li`
display:flex;
color:white;
font-family: 'Roboto';
align-items:center;
margin-top:6px;

`

const Button = styled.button`
border-radius: 8px;
padding:2px;
cursor: pointer;
font-family: 'Roboto';
border: 1px solid #e60d0dff;
margin-left:8px;


 &:hover {
    background-color: #000000ff;
    color:red;
  }

`

const TodoLista = ({ lista, remover }) => {
    return (
        <Ul>
            {lista.map((tarefa, index) => <Li key={index}>{tarefa} <Button onClick={() => remover(tarefa)}>Remover</Button></Li>)}
        </Ul>

    )


}

export default TodoLista;