const carouselOptions = {
  'desktop': {
    breakPoint: 1000,
    products: 3
  },
  'tablet': {
    breakPoint: 600,
    products: 2
  },
  'mobile': {
    breakPoint: 500,
    products: 1
  }
}

function getOptions () {
  const width = window.outerWidth
  let device
  if (width >= carouselOptions['desktop'].breakPoint) {
    device = carouselOptions['desktop']
  } else if (width >= carouselOptions['tablet'].breakPoint && width < carouselOptions['desktop'].breakPoint) {
    device = carouselOptions['tablet']
  } else if (width <= carouselOptions['mobile'].breakPoint) {
    device = carouselOptions['mobile']
  }
  return device.products || carouselOptions['tablet'].products
}

export default getOptions
