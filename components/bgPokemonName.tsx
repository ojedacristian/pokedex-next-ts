import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const BGPokemonName: React.FC = () => {
  return (
    <Box
        display='flex'
        position='absolute'
        justifyContent='center'
        alignItems='flex-end'
        height='100%'
        width='100%'
      >
        <Text
          opacity='20%'
          fontSize='300px'
        >
          PIKACHU
        </Text>
      </Box>
  )
}
