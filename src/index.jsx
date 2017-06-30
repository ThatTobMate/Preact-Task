import { h, render } from 'preact'
import App from './components'

render(
	<App />,
	document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components', () => {
  	const x = document.getElementById("root")
  	root.innerHTML = ''
    const NextApp = require('./components').default
    render(
      <NextApp />,
      document.getElementById('root')
    )
  })
 }