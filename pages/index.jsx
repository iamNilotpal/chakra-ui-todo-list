import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoHeading from '../components/Heading';
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const parseTodos = JSON.parse(localStorage.getItem('todos') || []);
    setTodos(parseTodos);
  }, []);

  const addTodo = (text) => {
    const todo = { id: Date.now() + Math.random(), text };
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <>
      <TodoHeading />
      <VStack>
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        <TodoForm onAddTodo={addTodo} />
      </VStack>
    </>
  );
}
