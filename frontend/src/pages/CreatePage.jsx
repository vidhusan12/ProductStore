import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })


  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h2"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Page sdfsdfsdfdsf
        </Heading>

        <Box>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage