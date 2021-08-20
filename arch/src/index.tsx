import React from 'react'
import ReactDOM from 'react-dom'
import Media from 'react-media'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Media
      query="(max-width: 500px)"
      render={() => (
        <div>
          устройство не поддерживается
        </div>
      )}
    />
    <Media query="(min-width: 501px)" render={() => <App />} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
