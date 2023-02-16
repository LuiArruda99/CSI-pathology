import { Container, Flex, Box, Heading, Button, Stack, Text, IconButton, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaCog, FaHome, FaSignInAlt, FaSignOutAlt, FaComments, FaMedal } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <Container maxW={'7xl'}>
      <Flex>
        <Box
          //w={'20%'}
          h={'100vh'}
          position={'fixed'}
          bg={useColorModeValue('gray.100', 'gray.900')}
        >
          <Stack mt={20} spacing={5}>
            <Button variant="ghost" leftIcon={<Icon as={FaHome} />}>
              Página de Início
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={FaCog} />}>
              Configurações 
            </Button>

            <a href="https://csi-pathology-desafios.vercel.app">
            <Button variant="ghost" leftIcon={<Icon as={FaMedal} />}>
              Desafio de hoje 
            </Button>
            </a>
             <a href="https://csi-pathology-chat.vercel.app">
              <Button variant="ghost" leftIcon={<Icon as={FaComments} />}>
                Chat
              </Button>
            </a>
          </Stack>
        </Box>
        <Box w={'80%'} ml={'20%'}>
          <Flex justifyContent={'space-between'} mb={10} mt={10}>
            <Heading>Dashboard</Heading>
            <IconButton icon={<FaSignInAlt />} aria-label="Login" />
          </Flex>
          <Flex>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={5}
              w={'33.33%'}
            >
              <Heading size="md" mb={2}>
                Desafios
              </Heading>
              <Text>
                Visualize e conclua desafios para ganhar pontos e subir na tabela de classificação.
              </Text>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={5}
              w={'33.33%'}
            >
              <Heading size="md" mb={2}  href="https://github.com">
                Chat
              </Heading>
              <Text>
                Converse com outros usuários para compartilhar conhecimento e colaborar nos desafios.
              </Text>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={5}
              w={'33.33%'}
            >
              <Heading size="md" mb={2}>
                Perfil
              </Heading>
              <Text>
                Visualize e edite as informações do seu perfil e acompanhe seu progresso nos desafios.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
