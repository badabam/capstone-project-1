import SearchInput from './SearchInput'
import { action } from '@storybook/addon-actions'

export default {
  title: 'SearchInput Component',
  component: SearchInput,
}

const Template = args => <SearchInput {...args} />

export const SearchInputDefault = Template.bind({})
SearchInputDefault.args = {
  setSearchInputValue: action('onChange'),
  placeholder: 'Search your Movie',
  tag: 'input',
}
