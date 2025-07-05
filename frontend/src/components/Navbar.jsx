import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { useColorMode } from "./ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

// Navbar component displays the top navigation bar for the app
const Navbar = () => {
  // Get current color mode and toggle function from custom hook
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // Container centers the navbar content and sets max width
    <Container maxW="1140px" px={4} >
      {/* Flex layout for responsive horizontal/vertical arrangement */}
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        {/* App title with link to home page */}
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          // bgGradient='linear(to-l, #7928CA, #FF0080)'
          // bgClip="text"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        {/* Right side: Add button and color mode toggle */}
        <HStack spacing={2} alignItems={"center"}>
          {/* Link to create page with add icon button */}
          <Link to={"/create"}>
            <Button>
              <CgAddR fontSize={20} />
            </Button>
          </Link>
          {/* Button to toggle light/dark mode */}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar;