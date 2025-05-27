import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";

import diff from "../assets/diff.png";
import jsonformat from "../assets/jsonformat.png";

const ToolsShowcase = () => {
  const imageSize = useBreakpointValue({ base: "100%", md: "45%" });

  return (
    <Grid
      w="100%"
    //   bg="lightgreen"
      py={{ base: 12, md: 20 }}
      px={4}
      height={"100dvh"}
      placeContent={"center"}
    >
      <Box textAlign="center" maxW="4xl" mx="auto" mb={12}>
        <Heading size={{ base: "lg", md: "xl" }} mb={4} color="textcolor">
          Compare or clean — your text tools in one place
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Spot every change in your content or beautify even the most tangled
          JSON. One simple interface. Built for clarity.
        </Text>
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        spacing={8}
      >
        <Box
          w={imageSize}
          bg="white"
        //   border="1px solid"
        //   borderColor="textgreenBg"
          boxShadow="md"
          rounded="2xl"
          overflow="hidden"
          transform={{ md: "rotate(-6deg)" }}
          transition="0.4s"
          _hover={{
            transform: { md: "scale(1.02) rotate(0deg)" },
            bg: "lightred",
          }}
        >
          <Image
            src={diff}
            alt="Diff Checker Screenshot"
            objectFit="cover"
            w="100%"
          />
        </Box>

        <Box
          w={imageSize}
          bg="white"
        //   border="1px solid"
        //   borderColor="textgreenBg"
          boxShadow="md"
          rounded="2xl"
          overflow="hidden"
          transform={{ md: "rotate(6deg)" }}
          transition="0.4s"
          _hover={{
            transform: { md: "scale(1.02) rotate(0deg)" },
            bg: "lightred",
          }}
        >
          <Image
            src={jsonformat}
            alt="JSON Formatter Screenshot"
            objectFit="cover"
            w="100%"
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default ToolsShowcase;
