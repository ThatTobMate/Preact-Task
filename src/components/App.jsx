import { h, render, Component } from 'preact'
import styles from './App.css'
import logo from '../assets/images/preact-logo.png'
import Carousel from './Carousel'

const data = [
  {
    name: '1',
    universe: 'Marvel',
    rating: 5
  },
  {
    name: '2',
    universe: 'DC',
    rating: 2
  },
  {
    name: '3',
    universe: 'DC',
    rating: 4
  },
  {
    name: '4',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '5',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '6',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '7',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '8',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '9',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '10',
    universe: 'Marvel',
    rating: 3
  },
  {
    name: '11',
    universe: 'Marvel',
    rating: 3
  }
]

class App extends Component {
  render () {
    return (
      <div className={styles.main}>
        <Carousel data={data} />
      </div>
    )
  }
}

export default App