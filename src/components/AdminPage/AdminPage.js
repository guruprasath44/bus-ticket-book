import React from 'react'
import ViewClosed from '../ViewClosed/ViewClosed'
import ViewOpened from '../ViewOpened/ViewOpened'

import './AdminPage.css'
export default function AdminPage () {
  const handleLogoClick = e => {
    e.preventDefault()
    window.location.href = '/Admin/home'
  }
  const handleResetClick = e => {
    e.preventDefault()
    window.location.href = '/Admin/reset'
  }

  return (
        <div className="container">
            <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log" style={{ color: 'darkblue', fontSize: '25px', fontWeight: 'bold' }} onClick={(e) => handleLogoClick(e)}>BUS TICKET BOOK</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul className="navbar-nav ml-auto nav-flex-icons ic">
                            {/* <li className="nav-item">
                                <a href="/#" style={{color: "White",fontWeight: "bold",fontSize: "20px"}} className="nav-link waves-effect" onClick={e => handleSignOut(e)}>Sign-Out</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <ul className="nav nav-pills">

                    <li className="nav-item">
                        <a style={{ height: '50px', marginRight: '100px', fontSize: '20px', marginTop: '-10px', color: 'White' }} className="btn" data-toggle="pill" href="#menu1"> View Closed</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ height: '50px', marginRight: '100px', fontSize: '20px', marginTop: '-10px', color: 'White' }} className="btn" data-toggle="pill" href="#menu2"> View Opened</a>
                    </li>
                    <li className="nav-item">
                    <button onClick={(e) => handleResetClick(e)} style={{ height: '50px', marginRight: '100px', fontSize: '23px', marginTop: '-13px', color: 'White' }} className="btn" data-toggle="pill">
                             Reset
                            </button>
                        {/* <a className="nav-link"   style={{color: "White", fontSize: "20px", marginTop: "-10px",marginRight: "200px"}} data-toggle="pill" href="/Admin/reset">Reset</a> */}
                    </li>

                </ul>

                <div className="tab-content">

                    <div className="tab-pane container fade mn-box" id="menu1"><ViewClosed /></div>
                    <div className="tab-pane container fade mn-box" id="menu2"><ViewOpened /></div>
                    {/* <div className="tab-pane container fade mn-box" id="menu3"><Reset /></div> */}
                </div>
            </div>

        </div>
  )
}
