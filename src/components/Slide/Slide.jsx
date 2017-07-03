import { h, Component } from 'preact'
import styles from './Slide.css'

class Slide extends Component {
	constructor (props) {
		super(props)
		
	}

	render ({ idx, name, width, padding }) {
		const left = idx * (width + padding)

		return (
			<div class={`${styles.slide} ${styles.animate}`} style={{ width, left }}>
				{name}
			</div>
		)
	}
}

export default Slide