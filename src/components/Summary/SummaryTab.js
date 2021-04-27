import React from 'react'
import './SummaryTab.css'
import 'react-credit-cards/es/styles-compiled.css'
export default function SummaryTab () {
  const renderNamesOfPassenger = () => {
    const passArray = localStorage.getItem('nameData')
    if (passArray) {
      const nameArray = JSON.parse(passArray)
      return nameArray.map((name, idx) => {
        return (
                    <p key={idx}>{name}</p>
        )
      })
    }
  }
  const renderNamesOfEmail = () => {
    const passArray = localStorage.getItem('emailData')
    if (passArray) {
      const nameArray = JSON.parse(passArray)
      return nameArray.map((name, idx) => {
        return (
                    <p key={idx}>{name}</p>
        )
      })
    }
  }
  const renderNamesOfPhone = () => {
    const passArray = localStorage.getItem('phoneData')
    if (passArray) {
      const nameArray = JSON.parse(passArray)
      return nameArray.map((name, idx) => {
        return (
                    <p key={idx}>{name}</p>
        )
      })
    }
  }
  const renderNamesOfAge = () => {
    const passArray = localStorage.getItem('ageData')
    if (passArray) {
      const nameArray = JSON.parse(passArray)
      return nameArray.map((age, idx) => {
        return (
                    <p key={idx}>{age}</p>
        )
      })
    }
  }
  const renderNamesOfGender = () => {
    const passArray = localStorage.getItem('genderData')
    if (passArray) {
      const nameArray = JSON.parse(passArray)
      return nameArray.map((name, idx) => {
        return (
                    <p key={idx}>{name}</p>
        )
      })
    }
  }

  const renderSeatNumbers = () => {
    const seatArray = localStorage.getItem('reservedSeats')
    if (seatArray) {
      const seaArr = JSON.parse(seatArray)
      return seaArr.map((seat, idx) => {
        return (
                    <p key={idx}>{seat}</p>
        )
      })
    }
  }

  const moveToTicketPage = (e) => {
    e.preventDefault()
    window.localStorage.clear()
    console.log(e)
    alert('Ticket has been Booked succesfully')
    window.location.href = '/'
  }

  return (
            <div className="paym">
                <div className="row">
                    <div className="columnTwo">
                        <h3>BUS BOOK</h3>
                        <div>
                            <p>BOOKING DETAILS</p>
                            <div className="row">
                                <div className="col-6 pt">
                                    <p className="hdng">Username</p>
                                    <hr className="hr3" />

                                    <p className="hdng">Passenger Name</p>
                                    {renderNamesOfPassenger()}
                                    <hr className="hr3" />

                                    <p className="hdng">Passenger Email</p>
                                    {renderNamesOfEmail()}
                                    <hr className="hr3" />

                                    <p className="hdng">Passenger Age</p>
                                    {renderNamesOfAge()}
                                </div>

                                <div className="col-6">

                                    <p className="usrName">
                                    {renderNamesOfPassenger()}</p>
                                    <hr className="hr3" />

                                    <p className="hdng">Seat No</p>
                                    {renderSeatNumbers()}
                                    <hr className="hr3" />

                                    <p className="hdng">Phone no</p>
                                    {renderNamesOfPhone()}
                                    <hr className="hr3" />

                                    <p className="hdng">Gender</p>
                                    {renderNamesOfGender()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form>
                    <div className="">
                            <button style={{ marginBottom: '5px', marginLeft: '100px' }} onClick={e => moveToTicketPage(e)} className="btn btn-light btCustom">Submit</button>
                    </div>
                    </form>

                    </div>
            </div>
  )
}
