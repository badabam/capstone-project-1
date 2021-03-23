import UserInput from './UserInput'
import { action } from '@storybook/addon-actions'

export default {
  title: 'UserInput Component',
  component: UserInput,
}

const Template = args => <UserInput {...args} />

export const UserInputDefault = Template.bind({})
UserInputDefault.args = {
  setPayers: action('onChange'),
  placeholder: 'Insert your Name',
  tag: 'input',
}
