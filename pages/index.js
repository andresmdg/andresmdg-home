import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, Soy un desarrollador de software autodidacta de mexico!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andres Martinez
          </Heading>
          <p>Digital Craftsman ( NextJS /  SQL / NestJS / NoSQL / Java / JS Vanilla )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/about.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>

          Andres es un desarrollador Full Stack originario de aguascalientes, mexico con pasion por crear productos/servicios digitales. Cuando no esta en linea, le encanta escuchar y crear musica.
          Actualmente esta en busca de trabajo y/o colaboraciones en relacion a productos o servicios digitales. Andres se destaca por su adaptabilidad y caracter, lo que le ha llevado a tener control sobre sus emociones tomando buenas decisiones en situaciones inesperadas haciendo que pueda adaptarse fácilmente.
          Ha trabajado en pocos proyectos de manera independiente o de manera colaborativa ayudando a solucionar errores o crear desde cero aplicaciones web o de escritorio de baja - mediana escala.

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Portafolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Nacio en Aguascalientes (ags), Mexico.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          ....
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Me ♥
        </Heading>
        <Paragraph>
          Arte, Musica, Videojuegos
          , Baseball,{' '}
          Hamburguesas
          , Programacion
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Websites
        </Heading>
        <List>
          <ListItem>
            <Link href="https://linkedin.com/in/andresmdg/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                andresmdg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/andresmdg_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @andresmdg_
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout >
)

export default Home
export { getServerSideProps } from '../components/chakra'
