import { h, Component } from 'preact'
import styles from './Carousel.css'

import Slide from '../Slide'
import getOptions from './lib.js'

// Once a slide is out of the view move 

class Carousel extends Component {
	constructor (props) {
		super(props)

		this.state = this.getInitialState(props)
		
		this.handleLeft = this.handleLeft.bind(this)
		this.handleRight = this.handleRight.bind(this)
	}

  getInitialState ({ data }) {
    const outerWidth = 660
    const visibleSlides = getOptions()
    const padding = 20
    const width = (outerWidth / visibleSlides) - padding
    return {
      currentSlide: 0,
      endSlide: 4,
      visibleSlides,
      outerWidth,
      padding,
      width,
      data: data.map(x => { x.transform = 0; return x })
    }
  }

	handleLeft (e) {
		const { currentSlide, endSlide, width, data, padding } = this.state
		const newData = data.map(x => { 
			x.transform = x.transform + (width + padding)
			x.opacity = 1
			return x
		})

		const newCurrSlide = currentSlide - 1 === 0 ? data.length : currentSlide - 1
		const newEndSlide = endSlide - 1 === 0 ? data.length : endSlide - 1

		newData[currentSlide].transform = newData[currentSlide].transform - (width * data.length)
		newData[currentSlide].opacity = 0

		this.setState({
			currentSlide: newCurrSlide,
			endSlide: newEndSlide,
			data: newData
		})
	}

	handleRight (e) {
		const { currentSlide, endSlide, width, data, padding } = this.state
		const newData = data.map(x => { 
			x.transform = x.transform - (width + padding)
			x.opacity = 1
			return x
		})


		const newCurrSlide = currentSlide + 1 === data.length ? 0 : currentSlide + 1
		const newEndSlide = endSlide + 1 === data.length ? 0 : endSlide + 1
		newData[currentSlide].transform = newData[currentSlide].transform + ((width + padding) * data.length)
		newData[currentSlide].opacity = 0
		this.setState({
			currentSlide: newCurrSlide,
			endSlide: newEndSlide,
			data: newData
		})
	}

	renderSlides () {
		const { width, padding, data } = this.state

		return data.map((item, idx) => {
			return <Slide name={item.name} width={width} idx={idx} padding={padding} transform={item.transform} opacity={item.opacity} />
		})
	}

	render () {
		return (
			<div class={styles.carouselOuter}>
				<div class={styles.leftArrow} onClick={this.handleLeft} />
				<div class={styles.carouselInner}>
					{this.renderSlides()}
				</div>
				<div class={styles.rightArrow} onClick={this.handleRight} />
			</div>
		)
	}
}

export default Carousel