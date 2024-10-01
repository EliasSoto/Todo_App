import { Checkbox, Button, Stack, Paper, Container} from "@mantine/core";
import './styles.css';


export default function TodoList({ todos, setTodos, handleDelete }) {

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    
  };
  
    return (

      //Creamos el conationer para que los elementos ocupen todo el ancho de la pantalla
      <Container>
        
      {todos.map((todo, index) => (
        // Se utiliza un paper para dar forma y estilos al stack
        <Paper 
          key={index}
          style={{ display: 'flex', justifyContent: 'space-between' }}
          shadow="xl" 
          radius="xl" 
          withBorder p="xl"
          className="paper"
        >
          {/* Dentro del paper se inluyen los contenidos que estaran en el stack. */}
          <Checkbox
            
            color="teal"
            radius="md"
            size="lg"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(index)}
            label={
              <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </span>
            }
            
          />

          <Button 
            variant="light" 
            color="red" 
            radius="md"
            onClick={() => handleDelete(todo.text)}
            >

              Eliminar
          </Button>
        </Paper>
      ))}
      </Container>
    );
  }
