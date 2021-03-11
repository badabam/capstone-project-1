import Card from './Card/Card'
import Header from './Header/Header'

export default function HomePage({ filteredMovies }) {
  return (
    <>
      <Header name="Movie Picker" />
      {filteredMovies.map(({ id, title, poster, genre }) => (
        <Card key={id} title={title} poster={poster} genre={genre} />
      ))}
    </>
  )
}
