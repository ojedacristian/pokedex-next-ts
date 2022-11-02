import type { NextPage } from 'next'
import { Box, Flex, Text, Heading, Container, FormControl, Input, Stack, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import { BGPokemonName } from '../components/bgPokemonName';
import { ChevronIcon } from '../components/icons/icons';

const Home: NextPage = () => {
  return (
    <Box
      backgroundColor='yellow.300'
    >
      <BGPokemonName />
      <Container
        maxWidth='container.xl'
      >
        <Stack
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          width='100%'
          minHeight='100vh'
          padding='1em'
        >
          <FormControl width='400px' display='flex' alignItems='center'>
            <Input placeholder='Search by name or number'
              focusBorderColor='grey'
              color='blackAlpha.700'
              backgroundColor='white'
              textTransform='capitalize'
            />
          </FormControl>

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
          <Box
            as='footer'
            display='flex'
            justifyContent='space-between'
            width='100%'
            alignItems='flex-end'
          >
            <IconButton
              aria-label='next pokemon'
              variant='outline'
              border='none'
              icon={ <ChevronIcon/>}
              transform='rotate(180deg)'
            />
            <IconButton
              aria-label='next pokemon'
              variant='outline'
              border='none'
              icon={ <ChevronIcon/>}
            />
          </Box>
        </Stack>

      </Container>
    </Box>
  )
}

export default Home
