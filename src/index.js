import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

console.log('testuser1 : ilovebananas', 'testadmin5 : always_name_your_functions', 'qauser3 : luv2manage5tate')

let appState = {
  username: '',
  password: '',
  isLoading: false
}

let loginUrl = 'http://127.0.0.1:7979/api/login'
let userData = { username: appState.username, password: appState.password }

function makeAjaxCall () {
  axios({
    method: 'post',
    url: loginUrl,
    data: userData
  })
    .then(loginResponse)
    .catch(handleError)
}


function handleError (error) {
  appState.isLoading = false
  console.log('ups!', error)
}

function loginResponse (response) {
  appState.isLoading = false
  console.log(response.statusText)
  console.log(response.data.message)
}

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)


export { appState, makeAjaxCall }
