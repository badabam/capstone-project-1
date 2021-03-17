import Card from './Card'
import posterImg from './test_img.jpg'

export default {
  title: 'Card Component',
  component: Card,
}

export const CardDefault = () => (
  <Card
    title={['Batman']}
    genre={['action', 'adventure', 'drama']}
    poster={posterImg}
  />
)
