import React from 'react'
import './homepage.css'
export default function Homepage () {
  const enterSite = e => {
    e.preventDefault()

    window.location.href = '/book'
  }
  const enterLogin = e => {
    e.preventDefault()
    window.location.href = '/Admin'
    if (sessionStorage.getItem('admin') === 'admin') {
      window.location.href = '/Admin/home'
    } else {
      window.location.href = '/Admin'
    }
  }
  return (
        <div className='container maint-cnt'>
            <div className="header-nav">

                <span className="mytext1">TICKET BOOK </span>

            </div>

        <div className="container">
        <a href="/Admin" onClick={e => enterLogin(e) } className="mainBtn">
                    <svg width="277" height="62">
                    <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="250" height="50"></rect>
                    </svg>
                <span >Admin</span>
        </a>
        <a href="/book" onClick={e => enterSite(e)} className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="250" height="50"></rect>
                    </svg>
                <span >BOOK A TICKET !</span>
        </a>
            </div>
        </div>
  )
}
