const tsconfigPaths = require("vite-tsconfig-paths");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    emotionAlias: false,
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    };
  },
  docs: {
    autodocs: true,
  },
};
