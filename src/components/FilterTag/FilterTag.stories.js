import FilterTag from './FilterTag'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterTag Component',
  component: FilterTag,
}

const Template = args => <FilterTag {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onSetGenre: action('onClick'),
  genres: ['adventure'],
  tag: 'button',
}
