import { h, Component } from 'preact'
import styles from './Carousel.css'

import Slide from '../Slide'
import getOptions from './lib.js'

// Once a slide is out of the view move 

function overslice (array, startindex, count) {
  var retarray = []
  var increment = (count >= 0) ? 1 : -1
  count = Math.abs(count)

  for (var i = startindex, c = 0; c < count; i += increment, c++) {
    if (i < 0) i = array.length - 1
    retarray.push(array[i % array.length])
  }
  return retarray
}

class Carousel extends Component {
	constructor (props) {
		super(props)

		this.state = this.getInitialState()
		
		this.handleLeft = this.handleLeft.bind(this)
		this.handleRight = this.handleRight.bind(this)
	}

  getInitialState () {
    const outerWidth = 660
    const visibleSlides = getOptions()
    const padding = 20
    return {
      currentSlide: 0,
      endSlide: 4,
      visibleSlides,
      outerWidth,
      padding,
      width: (outerWidth / visibleSlides) - padding
    }
  }

	handleLeft (e) {
		const { currentSlide, endSlide } = this.state
		const { data } = this.props

		const newCurrSlide = currentSlide === 0 ? data.length : currentSlide - 1
		const newEndSlide = endSlide === 0 ? data.length : endSlide - 1

		this.setState({
			currentSlide: newCurrSlide,
			endSlide: newEndSlide
		})
	}

	handleRight (e) {
		const { currentSlide, endSlide } = this.state

		this.setState({
			currentSlide: currentSlide + 1,
			endSlide: endSlide + 1
		})
	}

	renderSlides (data) {
		const { width, padding, currentSlide, visibleSlides } = this.state
		const items = overslice(data, currentSlide, visibleSlides)

		return items.map((item, idx) => {
			return <Slide name={item.name} width={width} idx={idx} padding={padding} />
		})
	}

	render ({ data }, {currentSlide, visibleSlides}) {
		return (
			<div class={styles.carouselOuter}>
				<div class={styles.leftArrow} onClick={this.handleLeft} />
				<div class={styles.carouselInner}>
					{this.renderSlides(data)}
				</div>
				<div class={styles.rightArrow} onClick={this.handleRight} />
			</div>
		)
	}
}

export default Carousel