import { ChakraProvider } from "@chakra-ui/react";
import type { Preview, StoryFn } from "@storybook/react";
import { theme } from "../src/utils/theme/theme";

import React from "react";

const withChakra = (StoryFn: StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withChakra],
};

export default preview;
