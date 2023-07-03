import type { StorybookConfig } from '@storybook/react-vite'
import { InlineConfig } from 'vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  viteFinal: async (inlineConfig: InlineConfig) => {
    return { ...inlineConfig, base: '/react-json-formatter/' }
  }
}
export default config
