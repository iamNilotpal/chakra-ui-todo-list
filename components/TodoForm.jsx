import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo)
      return toast({
        description: 'No content provided.',
        isClosable: true,
        status: 'error',
        variant: 'left-accent',
        title: 'Error',
        duration: 1500,
      });

    onAddTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          placeholder='Learn React.js...'
          variant='filled'
          mr={2}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button p='0px 30px' variant='outline' colorScheme='pink' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default TodoForm;
