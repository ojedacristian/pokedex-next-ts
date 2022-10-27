import type { NextPage } from 'next'
import { Box, Flex, Text, Heading, Container } from '@chakra-ui/react'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Box
      backgroundColor='yellow.300'
      width='100vw'
      height='100vh'
    >
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
      <Container
        maxWidth='container.xl'
        padding='1em'
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
          <Box
            display='flex'
            alignItems='center'
          >
            <Text>#</Text>
            <Heading fontSize='70px' as='h1' fontWeight='regular'
              style={{
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1px'
              }}
            >
              025
            </Heading>
          </Box>
          <Heading fontSize='90px' as='h1' fontWeight='regular'>PIKACHU</Heading>
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
