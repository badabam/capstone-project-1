import { useState } from 'react'
import movies from './movieList.json'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'

function App() {
  const [genres, setGenres] = useState([])

  const filteredMovies = movies.filter(
    movie => genres.length === 0 || movie.genre.some(g => genres.includes(g))
  )

  const [searchInputValue, setSearchInputValue] = useState('')

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage filteredMovies={filteredMovies} />
        </Route>
      </Switch>

      <Switch>
        <Route path="/create"></Route>
      </Switch>

      <Switch>
        <Route path="/search">
          <SearchPage
            labelText="Choose your Movie:"
            placeholder="Movie Name"
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
            genres={genres}
            onSetGenre={handleSetGenre}
          />
        </Route>
      </Switch>

      <Switch>
        <Route path="/filteredmovies">
          <FilteredMoviesPage
            filteredMovies={filteredMovies}
            searchInputValue={searchInputValue}
          />
        </Route>
      </Switch>
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
