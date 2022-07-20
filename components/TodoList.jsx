import { Badge, StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo }) => {
  if (todos.length === 0)
    return (
      <Badge colorScheme='green' mb='8' p={3} borderRadius='md'>
        Yay, All Todos Are Completed.
      </Badge>
    );

  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.200'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      width='100%'
      alignItems='stretch'
      mb={6}
      maxW={{ base: '80vw', sm: '70vw', lg: '50vw', xl: '40vw' }}
    >
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
      ))}
    </VStack>
  );
};

export default TodoList;
