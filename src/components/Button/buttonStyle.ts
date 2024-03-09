import { colors } from "@/utils/theme/colors";
import { ComponentStyleConfig } from "@chakra-ui/theme";

export const buttonStyle: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "6px",
  },
  sizes: {
    sm: {
      fontSize: "16px",
      lineHeight: "24px",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: colors.primaryBlue[500],
      color: colors.primaryBlue[500],
    },
    solid: {
      bg: colors.primaryBlue[500],
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "sm",
    variant: "outline",
  },
};
