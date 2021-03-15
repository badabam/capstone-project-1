import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import movies from './movieList.json'

import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'
import HomePage from './components/HomePage'

function App() {
  const [genres, setGenres] = useState([])
  const [players, setPlayers] = useState([])

  const filteredMovies = movies.filter(
    movie => genres.length === 0 || movie.genre.some(g => genres.includes(g))
  )

  const [searchInputValue, setSearchInputValue] = useState('')

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage
            labelText="Insert your Names:"
            placeholder="John Doe"
            addPlayer={addPlayer}
            players={players}
            onHandleDelete={handleDelete}
          />
        </Route>
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

  function addPlayer({ nameOfPlayer }) {
    setPlayers([{ name: nameOfPlayer }, ...players])
  }

  function handleDelete(index) {
    setPlayers([...players.slice(0, index), ...players.slice(index + 1)])
  }
}

export default App
