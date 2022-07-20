import { DeleteIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Todo = ({ todo, onDeleteTodo }) => {
  return (
    <HStack key={todo.id}>
      <Text fontSize={'17px'} fontWeight='400'>
        {todo.text}
      </Text>
      <Spacer />
      <IconButton
        icon={<DeleteIcon />}
        isRound='true'
        onClick={() => onDeleteTodo(todo.id)}
      />
    </HStack>
  );
};

export default Todo;
