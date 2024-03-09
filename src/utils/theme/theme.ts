import { buttonStyle } from "@/components/Button/buttonStyle";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: buttonStyle,
  },
});
