import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'
import data from './movieList.json'

function App() {
  const [searchInputValue, setSearchInputValue] = useState('')

  const tag = []
  data.map(({ genre }) => genre.map(item => tag.push(item)))
  const uniqueTag = [...new Set(tag)]
  return (
    <div>
      <Header name="Movie Picker" />

      <SearchInput
        labelText="Choose your Movie:"
        placeholder="Movie Name"
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />

      {data
        .filter(item =>
          item.title.toLowerCase().includes(searchInputValue.toLowerCase())
        )
        .map(({ id, title, poster, genre }) => (
          <Card key={id} title={title} poster={poster} genre={genre} />
        ))}
      <p>Pick your Genre(s):</p>

      {uniqueTag.map(item => (
        <Button>{item}</Button>
      ))}
    </div>
  )
}

export default App
