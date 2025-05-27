import { useState } from "react";
import { Box, Button, Grid, Heading, VStack, useToast } from "@chakra-ui/react";
import TextArea from "./TextArea";
import DiffViewer from "./DiffViewer";
import useApiCallHooks from "../Helpers/useApiCallHooks";

const DiffChecker = () => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [showDiff, setShowDiff] = useState(false);
  const [diffHtml, setDiffHtml] = useState("");

  const toast = useToast();
  const { getDiff, loading } = useApiCallHooks();

  const handleCompare = async () => {
    if (!leftText || !rightText) {
      toast({
        title: "Both text inputs are required.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const res = await getDiff(leftText, rightText);
    setDiffHtml(res);
    setShowDiff(true);
  };

  return (
    <VStack
      spacing={6}
      w="100%"
      p={{ base: 6, md: 12 }}
      bg="grey"
      id="diff-checker"
      minHeight={"100dvh"}
      scrollSnapAlign="start"
      overflow={"scroll"}
      display={{ base: 'none', md: 'block'}}
    >
      <Heading size="lg" mb={2} mt={2} color={"black"}>
        Diff Checker
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={4}
        w="100%"
        height={"100%"}
      >
        <TextArea
          value={leftText}
          setValue={setLeftText}
          textAreaProps={{
            placeholder: "Enter Original text...",
            bg: "white",
            fontSize: "sm",
            fontFamily: "mono",
            fontWeight: "normal",
            p: 3,
          }}
          sx={{
            minHeight: { md: "70dvh" },
            height: { base: "40dvh" },
          }}
        />

        <TextArea
          value={rightText}
          setValue={setRightText}
          textAreaProps={{
            placeholder: "Enter modified text...",
            bg: "white",
            fontSize: "sm",
            fontFamily: "mono",
            fontWeight: "normal",
            p: 3,
          }}
          sx={{
            minHeight: { md: "70dvh" },
            height: { base: "40dvh" },
          }}
        />
      </Grid>

      <Button
        colorScheme="teal"
        onClick={handleCompare}
        isLoading={loading}
        loadingText="Comparing"
        sx={{
          padding: 2,
        }}
      >
        Compare
      </Button>
      {showDiff && diffHtml && (
        <Box
          w="100%"
          p={4}
          mt={2}
          borderWidth="1px"
          borderRadius="md"
          bg={"white"}
          height={"fit-content"}
          id="diffViewer"
        >
          <DiffViewer diffHtml={diffHtml} />
        </Box>
      )}
    </VStack>
  );
};

export default DiffChecker;
