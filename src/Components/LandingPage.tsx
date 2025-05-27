import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";

function LandingPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      bg="#f9fafa"
      minH="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      {/* Blurred Circular Background */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width={{base:"100%",md:"500px"}}
        height="500px"
        borderRadius="full"
        bg="#ceeedf"
        filter="blur(150px)"
        zIndex={0}
      />

      <VStack spacing={6} textAlign="center" maxW="xl" zIndex={1}>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          color="teal.600"
          letterSpacing="tight"
        >
          DiffNFormatter
        </Text>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Compare. Format. Done.
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
          Quickly highlight differences in text and beautify unformatted JSON —
          built for developers who value clarity.
        </Text>

        <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={4}>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => scrollToSection("diff-checker")}
          >
            Try Diff Checker
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("json-formatter")}
          >
            Format JSON
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
}

export default LandingPage;
