
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import GlobalStyle from '../src/components/GlobalStyle/GlobalStyle'
import React from "react"
    import { addDecorator } from "@storybook/react"
    import { MemoryRouter } from "react-router"
    
    addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}

export const decorators =[
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
]
