import { h, render, Component } from 'preact'
import styles from './App.css'
import logo from '../assets/images/preact-logo.png'

if (module.hot) {
  module.hot.accept()
}

const data = [
	{
		name: 'Spiderman',
		universe: 'Marvel',
		rating: 5
	},
	{
		name: 'Batman',
		universe: 'DC',
		rating: 2
	},
	{
		name: 'Wonder Woman',
		universe: 'DC',
		rating: 4
	},
		{
		name: 'Iron Man',
		universe: 'Marvel',
		rating: 3
	}
]

class App extends Component {
	render () {
		return (
			<div className={styles.main}>
				<img src={logo} alt='logo' />
				<h1 className={styles.header}> Preact Starter App </h1>
			</div>
		)
	}
}

export default App