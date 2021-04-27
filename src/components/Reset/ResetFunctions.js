import axios from 'axios'

export function resetdata () {
  const apiUrl = 'http://localhost:8080/bus/admin/reset'

  return axios.post(apiUrl, {

    // headers:{
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxYjYxNmUwYThmOTBlN2MwM2M1MmQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTgwNjQ5MjB9.OYRx1PmB1ckDpMo89iqIMlfbey5L2CxygdO6jn4XEXA'
    // },withCredentials: true
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
    }

  })
}
