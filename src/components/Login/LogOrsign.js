import React, { useState } from 'react'
import * as logFunc from './loginFunctions.js'
import './logOrsign.css'
// import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export default function LogOrsign ({ history }) {
  const [userData, setUserData] = useState({})
  console.log(userData)
  if (userData == null) {
    window.location.href = './Admin'
  }

  const handleChangeEvent = (e, title) => {
    const value = e.target.value
    setUserData({ ...userData, [title]: value })
  }

  const submitData = e => {
    e.preventDefault()
    logFunc.logUserIn(userData)
      .then(response => response.data)
      .then(data => {
        // eslint-disable-next-line react/prop-types
        history.push('/Admin')
        window.location.href = '/Admin/home'
        sessionStorage.setItem('admin', 'admin')
        console.log(data)
      })
  }

  return (
        <div className="container">
            <section className="myform-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-60">
                            <div className="form-area login-form">

                                    {/* <ul>
                                        <li><a href="/#" className="facebook"><FaFacebookF /></a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="/#" className="twitter"><FaTwitterSquare /></a></li>
                                    </ul> */}

                                <div className="form-input">
                                    <h2>LOGIN</h2>
                                    <form onSubmit={(e) => { submitData(e) }}>
                                        <div className="form-group">
                                            <input className="loginInfo" type="email" name="name" required onChange={e => handleChangeEvent(e, 'email')} />
                                            <label>Email-Id</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="loginInfo" type="password" name="password" required onChange={e => handleChangeEvent(e, 'password')} />
                                            <label>password</label>
                                        </div>
                                        <div className="myform-button">
                                            <button type="submit" className="myform-btn">Login</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
  )
}
