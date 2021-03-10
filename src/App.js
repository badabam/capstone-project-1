import { useState } from 'react'
import './App.css'

import Card from './components/Card/Card'
import FilterTag from './components/FilterTag/FilterTag'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'
import data from './movieList.json'

function App() {
  const [filteredMovies, setFilteredMovies] = useState(data)
  return (
    <div>
      <Header name="Movie Picker" />

      <SearchInput labelText="Choose your Movie:" placeholder="Movie Name" />

      <FilterTag onFilteredMovie={onFilteredMovie} />

      {filteredMovies.map(({ id, title, poster, genre }) => (
        <Card key={id} title={title} poster={poster} genre={genre} />
      ))}
    </div>
  )

  function onFilteredMovie(genre) {
    const filterMovie = data.filter(movie => movie.genre.includes(genre))
    setFilteredMovies(filterMovie)
  }
}

export default App
