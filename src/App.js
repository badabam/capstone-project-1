import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'
import data from './movieList.json'

function App() {
  return (
    <div className="App">
      <Header name="Movie Picker" />
      <SearchInput labelText="Choose your Movie:" placeholder="Movie Name" />
      {data.map(({ id, title, poster, genre }) => (
        <Card key={id} title={title} poster={poster} genre={genre} />
      ))}
    </div>
  )
}

export default App
