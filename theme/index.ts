import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    colors: {
        brand: {
            900: '#666'
        }
    },
    fonts: {
        heading: 'Nunito',
        body: 'Roboto'
    }
})


export default theme