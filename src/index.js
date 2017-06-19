import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'

let loginUrl = 'http://127.0.0.1:7979/api/login'
let userData = { username: 'testuser1', password: 'ilovebananas' }

let appState = {
  username: null,
  password: null,
  isLoading: false
}

axios({
  method: 'post',
  url: loginUrl,
  data: userData
})
  .then(loginResponse)
  .catch(handleError)

function handleError (error) {
  console.log('ups!', error)
}

function loginResponse (response) {
  console.log(response.statusText)
  console.log(response.data.message)
}

ReactDOM.render(App(appState), document.getElementById('root'))
registerServiceWorker()

console.log('testuser1 : ilovebananas')
console.log('testadmin5 : always_name_your_functions')
console.log('qauser3 : luv2manage5tate')
