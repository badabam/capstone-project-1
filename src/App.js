import './App.css'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'

function App() {
  return (
    <div className="App">
      <Header name="Movie Picker" />
      <SearchInput labelText="Choose your Movie:" placeholder="Movie Name" />
    </div>
  )
}

export default App
