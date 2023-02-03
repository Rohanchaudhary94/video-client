import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend,AiFillLinkedin,AiFillGithub,AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
      <Stack direction={['column' , 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>

            <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            >
                Subscribe to get updates

            </Heading>

            <HStack borderBottom={'2px solid white'} py='2' >
                <Input
                placeholder='Enter Email Here...'
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor={'none'}/>
                

                <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'} 
                >
                    <AiOutlineSend size={20} />

                </Button>

            </HStack>

        </VStack>

        <VStack
        w={'full'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
        >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                VIDEO HUB
            </Heading>
            <Text>All rights received</Text>

        </VStack>

        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Socail Media

            </Heading>

            <Button variant={'link'} colorScheme={'white'}>
                <AiFillYoutube size={20}/>
                <a href="https://www.youtube.com/" target={'black'}>
                    YouTube
                </a>

            </Button>

            <Button variant={'link'} colorScheme={'white'}>
                <AiFillLinkedin size={20}/>
                <a href="https://www.linkedin.com/feed/" target={'black'}>
                    Linkedin
                </a>
                 
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <AiFillGithub size={20}/>
                <a href="https://github.com/Rohanchaudhary94" target={'black'}>
                    Github
                </a>
                 
            </Button>

        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer
