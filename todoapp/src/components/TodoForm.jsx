import {Container, Button, TextInput} from '@mantine/core';
import { useState } from "react";
import './styles.css';


export default function TodoForm({ handleAddTask }) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
        handleAddTask({
            text: input,
            completed: false,
        });
        setInput('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
    };
    
    return (
        <Container 
        style={{ display: 'flex', justifyContent: 'center' }} 
        onSubmit={handleSubmit} 
        >
        

            <TextInput

                //Estilos del mantine
                size="md"
                radius="md"
                withAsterisk
                placeholder="Agregar una tarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                //Aplicar Css
                className='text-input'
               
                
            />

            {/* Pasa el texto como prop al componente TodoList */}
            
            <Button 
                
                //Estilos del mantine
                variant="light" 
                color="teal" 
                size="md" 
                radius="md"
                onClick={handleSubmit}
                type='submit'

                //Aplicar Css
                className='buttons'  
                
            >
                Agregar
            </Button>

        </Container>    
    );
}


