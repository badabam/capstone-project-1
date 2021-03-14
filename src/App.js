import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import movies from './movieList.json'

import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'
import UserInput from './components/UserInput/UserInput'
import User from './components/User/User'

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
          <SearchPage
            labelText="Choose your Movie:"
            placeholder="Movie Name"
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
            genres={genres}
            onSetGenre={handleSetGenre}
          />
          <br /> <br />
          <UserInput
            labelText="Insert your Names:"
            placeholder="John Doe"
            onAddPlayer={addPlayer}
            players={players}
          ></UserInput>
          {players.map(({ name }, index) => (
            <User key={index} player={name} />
          ))}
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
}

export default App
