import {Container, Title} from '@mantine/core'
import { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import PiePagina from './PiePagina';
import './styles.css';

export default function TodoApp(){


    //CODIGO IMPOSIBLE
    const [todos, setTodos] = useState([]); // Estado para las tareas

    // Función para agregar una nueva tarea
    const handleAddTask = (todo) => {
        setTodos([...todos, todo]); // Agrega la nueva tarea al array
    };

    const handleDelete = (todoText) => {
        const newTodos = todos.filter(todo => todo.text !== todoText);
        setTodos(newTodos);
    };
    //CODIGO IMPOSIBLE

    
    return(
        <Container className="Container">
            <br />

            <Title 
            style={{ textAlign: 'center'}}
            order = {1} 
            >
                Todo App
            </Title>

            <br />

            {/* Muestra el contenido de TodoForm */}
            <TodoForm handleAddTask={handleAddTask} />

            <br />
            
            {/* Muestra el contenido de TodoList */}
            <TodoList todos={todos} setTodos={setTodos} handleDelete={handleDelete}/>

            <br />
            
            <PiePagina className="PiePagina"/>

        </Container>
    )
}
