import { useState } from 'react'
import './App.css'

import Card from './components/Card/Card'
import FilterTag from './components/FilterTag/FilterTag'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'
import movies from './movieList.json'

function App() {
  const [genres, setGenres] = useState([])

  const filteredMovies = movies.filter(
    movie => genres.length === 0 || movie.genre.some(g => genres.includes(g))
  )

  return (
    <div>
      <Header name="Movie Picker" />

      <SearchInput
        name="name"
        labelText="Choose your Movie:"
        placeholder="Movie Name"
      />

      <FilterTag genres={genres} onSetGenre={handleSetGenre} />

      {filteredMovies.map(({ id, title, poster, genre }) => (
        <Card key={id} title={title} poster={poster} genre={genre} />
      ))}
    </div>
  )

  function handleSetGenre(genre) {
    if (genres.includes(genre)) {
      setGenres(genres.filter(g => g !== genre))
    } else {
      setGenres([...genres, genre])
    }
  }
}

export default App
