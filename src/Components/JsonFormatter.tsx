import { useState, useEffect } from "react";
import { Grid, Button, useToast, VStack, Heading } from "@chakra-ui/react";
import TextArea from "./TextArea";
import { CopyIcon } from "@chakra-ui/icons";

const JsonFormatter = () => {
  const [inputJson, setInputJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (inputJson?.length) {
      try {
        const parsed = JSON.parse(inputJson);
        const pretty = JSON.stringify(parsed, null, 2);
        setFormattedJson(pretty);
      } catch {
        toast.closeAll();
        setFormattedJson("invalid json");
        toast({
          title: "Invalid Json",
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  }, [inputJson]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedJson);
      toast({
        title: "Copied!",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    } catch {
      toast({
        title: "Copy failed",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <VStack
      spacing={6}
      w="100%"
      p={{ base: 6, md: 12 }}
      height="100dvh"
      id="json-formatter"
    >
      <Heading size="lg" mb={2} mt={2} color={"black"}>
        JSON Formatter
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={4}
        w="100%"
        height={"100%"}
        position={"relative"}
      >
        <TextArea
          value={inputJson}
          setValue={setInputJson}
          textAreaProps={{
            placeholder: "Paste unformatted JSON here...",
            bg: "white",
            height: "100%",
            fontSize: "sm",
            fontFamily: "mono",
            fontWeight: "normal",
            p: 3,
          }}
        />
          <Button
            size="sm"
            colorScheme="teal"
            leftIcon={<CopyIcon />}
            onClick={handleCopy}
            isDisabled={!formattedJson?.length}
            position={"absolute"}
            top={{base:'54%',md:4}}
            right={4}
            zIndex={1000}
          >
            Copy
          </Button>

          <TextArea
            value={formattedJson}
            setValue={() => {}}
            textAreaProps={{
              isReadOnly: true,
              bg: "gray.50",
              height: "100%",
              fontSize: "sm",
              fontFamily: "mono",
              fontWeight: "normal",
              p: 3,
              borderColor: "gray.300",
              color: formattedJson == "invalid json" ? "red" : "",
              overflowY: "auto",
              transition: "all 0.4 ease-in",
            }}
          />

      </Grid>
    </VStack>
  );
};

export default JsonFormatter;
