import type { NextPage } from 'next'
import {Box, Flex, Text, Container} from '@chakra-ui/react'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Box
      backgroundColor='purple.700'
      width='100vw'
      height='100vh'
    >
      <Box 
      display='flex'
      position='absolute'
      justifyContent='center'
      alignItems='center'
      height='100%'
      width='100%'
      paddingTop='12em'
      >
        <Text
          opacity='50%'
          fontSize='9xl'
          fontWeight='semibold'
        >
          PIKACHU
        </Text>
      </Box>
      <Container
        maxWidth='container.lg'
      >

      <Box 
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        color='white'
        width='100%'
        fontSize='6xl'
        paddingTop='1em'
        >
        <Text>#025</Text>
        <Text>PIKACHU</Text>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
      width='100%'>
        <Image src='/image1.png' alt=''
          width='475px'
          height='475px'
        />
      </Box>
      </Container>
    </Box>
  )
}

export default Home
