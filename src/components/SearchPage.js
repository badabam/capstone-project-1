import FilterTag from './FilterTag/FilterTag'
import Header from './Header/Header'
import SearchInput from './SearchInput/SearchInput'

export default function SearchPage({
  searchInputValue,
  setSearchInputValue,
  genres,
  onSetGenre,
}) {
  return (
    <>
      <Header name="Movie Picker" />
      <SearchInput
        labelText="Choose your Movie:"
        placeholder="Movie Name"
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <FilterTag genres={genres} onSetGenre={onSetGenre} />
    </>
  )
}
