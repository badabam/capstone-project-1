import data from '../../movieList.json'
import Button from '../Button/Button'

export default function FilterTag({ onFilteredMovie }) {
  const genreTag = []
  data.map(({ genre }) => genre.map(item => genreTag.push(item)))
  const uniqueTag = [...new Set(genreTag)]
  return (
    <div>
      <p>Pick your Genre(s):</p>

      {uniqueTag.map((item, id) => (
        <Button key={id} onClick={() => onFilteredMovie(item)}>
          {item}
        </Button>
      ))}
    </div>
  )
}
