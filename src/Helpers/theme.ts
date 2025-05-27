import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    grey:"#f9fafa",
    lightgreen: "#e9f9f3",
    lightred: "#feeded",
    textgreenBg: "#99e3c7",
    textredbg: "#faadac",
    textcolor: "#17191C",
  },
  styles: {
    global: {
      body: {
        bg: "brand.bg",
        color: "gray.800",
      },
    },
  },
});

export default customTheme;
