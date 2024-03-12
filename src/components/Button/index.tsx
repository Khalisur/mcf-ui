import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  ChakraProvider,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { theme } from "../../utils/theme/theme";

type ButtonProps = ChakraButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "solid", ...props }, ref) => {
    return (
      <ChakraProvider theme={theme}>
        <ChakraButton {...props} variant={variant} ref={ref}>
          {children}
        </ChakraButton>
      </ChakraProvider>
    );
  }
);
