import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'
import HomePage from './components/HomePage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [fetchMovies, setFetchMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [filterByGenres, setFilterByGenres] = useState([])

  const { REACT_APP_TMDB_API_KEY } = process.env
  let MOVIE_API
  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      MOVIE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_TMDB_API_KEY}&page=${i}`

      fetch(MOVIE_API)
        .then(res => res.json())
        .then(data => {
          setFetchMovies(oldState => [...oldState, ...data.results])
        })
        .catch(error => {
          throw error
        })
    }
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
          />
        </Route>

        <Route path="/search">
          <SearchPage
            labelText="Choose your Movie:"
            placeholder="Movie Name"
            genres={genres}
            onSetGenre={handleSetGenre}
            filterByGenre={filterByGenres}
          />
        </Route>

        <Route path="/filteredmovies">
          <FilteredMoviesPage
            filterByGenres={filterByGenres}
            movies={fetchMovies}
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

  function handleDelete(index) {
    setPlayers([...players.slice(0, index), ...players.slice(index + 1)])
  }
}
