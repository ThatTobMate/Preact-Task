import { h, Component } from 'preact'
import styles from './Slide.css'

class Slide extends Component {
	constructor (props) {
		super(props)
		
	}

	render ({ idx, name, width, padding, transform, opacity }) {
		const left = (idx - 1) * (width + padding)
		
		return (
			<div class={`${styles.slide} ${styles.animate}`} style={{ width, left, opacity, transform: `translate(${transform}px)` }}>
				{name}
			</div>
		)
	}
}

export default Slide