import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

type ButtonProps = ChakraButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "outline | solid", ...props }, ref) => {
    return (
      <ChakraButton {...props} variant={variant} ref={ref}>
        {children}
      </ChakraButton>
    );
  }
);
