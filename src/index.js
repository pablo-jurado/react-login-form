import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

console.log('testuser1 : ilovebananas', 'testadmin5 : always_name_your_functions', 'qauser3 : luv2manage5tate')

let initialState = {
  username: '',
  password: '',
  isLoading: false,
  isLogin: false,
  isModalActive: false
}

window.appState = initialState

function makeAjaxCall () {
  window.appState.isLoading = true
  axios({
    method: 'post',
    url: 'http://127.0.0.1:7979/api/login',
    data: { username: window.appState.username, password: window.appState.password }
  })
    .then(loginResponse)
    .catch(handleError)
}


function handleError (error) {
  window.appState.isLoading = false
  console.log('ups!', error)
}

function loginResponse (response) {
  window.appState.isLoading = false
  window.appState.isLogin = true
  console.log(response.statusText)
  console.log(response.data.message)
}

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)


export default makeAjaxCall
