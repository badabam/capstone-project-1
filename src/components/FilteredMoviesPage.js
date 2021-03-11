import Card from './Card/Card'
import Header from './Header/Header'

export default function FilteredMoviesPage({
  filteredMovies,
  searchInputValue,
}) {
  return (
    <>
      <Header name="Movie Picker" />
      {filteredMovies
        .filter(item =>
          item.title.toLowerCase().includes(searchInputValue.toLowerCase())
        )
        .map(({ id, title, poster, genre }) => (
          <Card key={id} title={title} poster={poster} genre={genre} />
        ))}
    </>
  )
}
