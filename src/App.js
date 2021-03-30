import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'
import HomePage from './components/HomePage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [filterByGenres, setFilterByGenres] = useState([])

  const [userSelection, setUserSelection] = useState('')

  const { REACT_APP_TMDB_API_KEY } = process.env
  let MOVIE_API
  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`

  useEffect(() => {
    const promises = []
    for (let i = 1; i <= 5; i++) {
      MOVIE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_TMDB_API_KEY}&page=${i}`

      const promise = fetch(MOVIE_API).then(res => res.json())
      promises.push(promise)
    }
    Promise.all(promises).then(results => setMovies(...results.flat()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MOVIE_API])

  useEffect(() => {
    fetch(GENRE_API)
      .then(res => res.json())
      .then(data => {
        setGenres([...data.genres])
      })
      .catch(error => {
        throw error
      })
  }, [GENRE_API])

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
            onHandleSelection={handleSelection}
          />
        </Route>

        <Route path="/search">
          <SearchPage
            labelText="Choose your Movie:"
            placeholder="Movie Name"
            genres={genres}
            onSetGenre={handleSetGenre}
            filterByGenre={filterByGenres}
            userSelection={userSelection}
          />
        </Route>

        <Route path="/filteredmovies">
          <FilteredMoviesPage
            filterByGenres={filterByGenres}
            movies={movies}
            genres={genres}
          />
        </Route>
      </Switch>
    </div>
  )

  function handleSetGenre(genre) {
    if (filterByGenres.includes(genre)) {
      setFilterByGenres(filterByGenres.filter(g => g !== genre))
    } else {
      setFilterByGenres([...filterByGenres, genre])
    }
  }

  function addPlayer({ nameOfPlayer }) {
    setPlayers([{ name: nameOfPlayer }, ...players])
  }

  function handleSelection(nameOfPlayer) {
    setUserSelection([{ name: nameOfPlayer }])
    console.log('clicked', nameOfPlayer)
  }

  function handleDelete(index) {
    setPlayers([...players.slice(0, index), ...players.slice(index + 1)])
  }
}
