import axios from 'axios'

export function logUserIn (userCredentials) {
  const apiUrl = 'http://localhost:8080/bus/admin/login'
  return axios.post(apiUrl, userCredentials, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function loadRoutes () {
  const authToken = sessionStorage.getItem('authToken' || '')
  const apiUrl = `http://localhost:8080/user/profile?secret_token=${authToken}`
  return axios.get(apiUrl)
}

export function getCurrentUserDetails (authToken) {
  const token = authToken
  const apiUrl = `http://localhost:8080/user/profile?secret_token=${token}`
  return axios.get(apiUrl)
}
