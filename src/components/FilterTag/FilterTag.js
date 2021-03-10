import movies from '../../movieList.json'
import Button from '../Button/Button'

export default function FilterTag({ onSetGenre, genres }) {
  const allGenres = movies.flatMap(({ genre }) => genre)
  const uniqueTags = [...new Set(allGenres)]
  return (
    <div>
      <p>Pick your Genre(s):</p>

      {uniqueTags.map((tag, id) => (
        <Button
          active={genres.includes(tag)}
          key={id}
          onClick={() => onSetGenre(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}
