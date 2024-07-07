import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],
  docs: {},
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
