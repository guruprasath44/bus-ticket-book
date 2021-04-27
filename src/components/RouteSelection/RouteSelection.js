import React from 'react'
import SeatSelection from '../SeatSelection/SeatSelection'
import SummaryTab from '../Summary/SummaryTab'
export default function RouteSelection () {
  const handleLogoClick = e => {
    e.preventDefault()

    window.location.href = '/'
  }
  return (
        <div className="container">
            <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log" style={{ color: 'darkblue', fontSize: '25px', fontWeight: 'bold', position: 'relative' }} onClick={(e) => handleLogoClick(e)}>BUS TICKET BOOK</a>
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
                        <a className="nav-link " style={{ color: 'White', fontSize: '20px', marginTop: '-10px', marginRight: '400px', position: 'relative' }} data-toggle="pill" href="#menu1">Select Seat</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ color: 'White', fontSize: '20px', marginTop: '-10px', marginRight: '200px', position: 'relative' }} data-toggle="pill" href="#menu2">Summary</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane container fade mn-box" id="menu1"><SeatSelection /></div>
                    <div className="tab-pane container fade mn-box" id="menu2"><SummaryTab /></div>
                </div>
            </div>
        </div>
  )
}
