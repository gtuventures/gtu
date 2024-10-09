import { useState } from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

interface Circular {
  date: string
  title: string
  description: string
  link: string
}

const circulars: Circular[] = [
  {
    date: '2024-07-18',
    title: 'Maverick Effect AI Challenge 2024 (2024JULFMTS00012238)(GIC)',
    description: 'The Maverick Effect AI Challenge is designed to inspire and empower students in Gujarat to explore the realm of Artificial Intelligence (AI) through hands-on problem-solving and innovative thinking.',
    link: 'https://www.youtube.com/',
  },
  {
    date: '2024-08-02',
    title: 'We-Pitch Competition - Empowering Women Entrepreneurs (GIC)',
    description: 'GTU Innovation Council has partnered with Womennovator to host the "We-Pitch Competition," a prestigious offline event focused on empowering and showcasing women entrepreneurs and leaders.',
    link: 'https://example.com/we-pitch-competition',
  },
  {
    date: '2024-08-10',
    title: 'Startup India Hackathon 2024 (2024AUGFMTS00012345)(GIC)',
    description: 'The Startup India Hackathon encourages innovative problem-solving among young entrepreneurs through a nationwide coding competition.',
    link: 'https://example.com/startup-india-hackathon',
  },
  {
    date: '2024-09-05',
    title: 'International Women’s Day Startup Pitch (GIC)',
    description: 'Join us in celebrating women in tech with a special pitch event highlighting female-led startups in India.',
    link: 'https://example.com/womens-day-pitch',
  },
]

export default function CircularsList() {
  const [visibleCirculars, setVisibleCirculars] = useState(3)
  const borderColor = useColorModeValue('blue.500', 'blue.300')
  const hoverTextColor = useColorModeValue('blue.600', 'blue.400')
  const descriptionColor = useColorModeValue('gray.600', 'gray.400')
  const dateColor = useColorModeValue('green.600', 'green.400')

  const handleLoadMore = () => {
    setVisibleCirculars((prev) => prev + 3) // Load 3 more circulars
  }

  return (
    <Box maxW="4xl" mx="auto" p={4}>
      <HStack spacing={2}>
        <Heading as="h1" size="lg">
          REPORTS & CIRCULARS
        </Heading>
        <Icon as={FiArrowUpRight} boxSize={6} />
      </HStack>

      <VStack spacing={6} align="stretch" mt={6}>
        {circulars.slice(0, visibleCirculars).map((circular, index) => (
          <Box
            key={index}
            borderLeftWidth={4}
            borderLeftColor={borderColor}
            pl={4}
          >
            <Text fontSize="sm" color={dateColor} mb={1}>
              {circular.date}
            </Text>
            <HStack mb={1} spacing={2}>
              <Box w={2} h={2} bg={borderColor} borderRadius="full" />
              <Link href={circular.link} passHref target='_blank'>
                <Text
                  as="a"
                  color={hoverTextColor}
                  _hover={{ textDecoration: 'underline' }}
                  display="flex"
                  alignItems="center"
                >
                  {circular.title}
                  <Icon as={FiArrowUpRight} boxSize={4} ml={1} />
                </Text>
              </Link>
            </HStack>
            <Text color={descriptionColor} fontSize="sm">
              {circular.description}
            </Text>
          </Box>
        ))}
      </VStack>

      {visibleCirculars < circulars.length && (
        <Button
          onClick={handleLoadMore}
          mt={6}
          colorScheme="blue"
          variant="solid"
          width="full"
        >
          Load More
        </Button>
      )}
    </Box>
  )
}
