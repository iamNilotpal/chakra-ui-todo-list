import React from 'react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { IconButton, Heading, VStack, useColorMode } from '@chakra-ui/react';

const TodoHeading = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p='30px 40px' mb={8}>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        isRound='true'
        size='lg'
        alignSelf={'flex-end'}
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight='extrabold'
        fontSize={{ base: '40px', md: '45px', sm: '35px' }}
        letterSpacing='wide'
        bgGradient='linear(to-r, pink.500, blue.500)'
        bgClip='text'
      >
        TODO APPLICATION
      </Heading>
    </VStack>
  );
};

export default TodoHeading;
