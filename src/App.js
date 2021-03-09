import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'
import data from './movieList.json'

function App() {
  const array = []
  data.map(({ genre }) => genre.map(item => array.push(item)))
  const newArray = [...new Set(array)]
  return (
    <div>
      <Header name="Movie Picker" />

      <SearchInput labelText="Choose your Movie:" placeholder="Movie Name" />

      {data.map(({ id, title, poster, genre }) => (
        <Card key={id} title={title} poster={poster} genre={genre} />
      ))}
      <p>Pick your Genre(s):</p>

      {newArray.map((item, index) => (
        <Button onClick={() => index}>{item}</Button>
      ))}
    </div>
  )
}

export default App
