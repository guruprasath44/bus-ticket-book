import React, { useState } from 'react'
import axios from 'axios'
import './Tab.css'
export default function SeatSelection () {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [phone, setPhone] = useState([])
  const [age, setAge] = useState([])
  const [gender, setGender] = useState([])
  const [reservedSeat, setReservedSeat] = useState([])
  const [seatNumber, setSeatnumber] = useState([])
  const getSeatNumber = (e) => {
    renderPassengerData(seatNumber)
    const newSeat = e.target.value
    if (reservedSeat.includes(newSeat)) {
      e.disabled = true
      if (seatNumber.includes(newSeat)) {
        setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
      }
    } else {
      setSeatnumber([...seatNumber, newSeat])
      setReservedSeat([...reservedSeat, newSeat])
      console.log(seatNumber)
    }
  }
  const handleGender = (e, seatNo) => {
    const { value } = e.target
    setGender(gender.concat(value))
  }
  const handlePassengerName = (e, seatNo) => {
    e.preventDefault()
    const value = e.target.value
    if (!value) {
      return (setName('name is required'))
    } else {
      setName(name.concat(value))
    }
  }
  const handlePassengerEmail = (e, seatNo) => {
    e.preventDefault()
    const value = e.target.value
    if (!value) {
      return (setEmail('Email is required'))
    } else {
      setEmail(email.concat(value))
    }
  }
  const handlePassengerPhone = (e, seatNo) => {
    e.preventDefault()
    const value = e.target.value
    if (!value) {
      return (setPhone('Phone no. is required'))
    } else {
      setPhone(phone.concat(value))
    }
  }
  const handlePassengerAge = (e, seatNo) => {
    e.preventDefault()
    const value = e.target.value
    if (!value) {
      return (setAge('Age is required'))
    } else {
      setAge(age.concat(value))
    }
  }
  const handleSubmitDetails = e => {
    e.preventDefault()

    localStorage.setItem('reservedSeats', JSON.stringify(seatNumber))
    localStorage.setItem('nameData', JSON.stringify(name))
    localStorage.setItem('emailData', JSON.stringify(email))
    localStorage.setItem('phoneData', JSON.stringify(phone))
    localStorage.setItem('ageData', JSON.stringify(age))
    localStorage.setItem('genderData', JSON.stringify(gender))
    const data = {
      seatID: parseInt(seatNumber),
      passenger: {
        name: name.toString(),
        gender: gender.toString(),
        age: parseInt(age),
        email: email.toString()
      }

    }
    console.log(data)
    axios.post('https://bus-ticket-booking-app.herokuapp.com/bus/ticket/create', data).then(function (response) {
      if (response.data === true) {
        window.location.href = '/'
        window.location.reload()
        alert(response)
      } else {
        window.location.href = '/book'
      }
    }).catch(function (error) {
      alert('The seat you are looking for is already booked')
      window.location.reload()
      console.log(error)
    })
  }

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => {
      return (
                <form key={idx} className="form seatfrm">
                    <p className="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" required placeholder="Enter Name" /><br></br>
                    <input className="form-control seatInp" onBlur={e => handlePassengerEmail(e, seat)} type="email" name="passenger-name" required placeholder="Enter Email" /><br></br>
                    <input className="form-control seatInp" onBlur={e => handlePassengerPhone(e, seat)} type="text" name="passenger-name" required placeholder="Enter Phone number" /><br></br>
                    <input className="form-control seatInp" onBlur={e => handlePassengerAge(e, seat)} type="int" name="passenger-name" required placeholder="Enter Age " /><br></br>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>)
    })
  }
  return (
        <div className="ss1">
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="1" id="1" />
                                            <label htmlFor="1">1</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="2" value="2" />
                                            <label htmlFor="2">2</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3" id="3" />
                                            <label htmlFor="3">3</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4" id="4" />
                                            <label htmlFor="4">4</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">

                                        <li className="seat">
                                            <input type="checkbox" value="5" id="5" />
                                            <label htmlFor="5">5</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6" id="6" />
                                            <label htmlFor="6">6</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="7" id="7" />
                                            <label htmlFor="7">7</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8" id="8" />
                                            <label htmlFor="8">8</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">

                                        <li className="seat">
                                            <input type="checkbox" value="9" id="9" />
                                            <label htmlFor="9">9</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10" id="10" />
                                            <label htmlFor="10">10</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="11" id="11" />
                                            <label htmlFor="11">11</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="12" id="12" />
                                            <label htmlFor="12">12</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                    <li className="seat">
                                            <input type="checkbox" value="13" id="13" />
                                            <label htmlFor="13">13</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="14" id="14" />
                                            <label htmlFor="14">14</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="15" id="15" />
                                            <label htmlFor="15">15</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="16" id="16" />
                                            <label htmlFor="16">16</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                    <li className="seat">
                                            <input type="checkbox" value="17" id="17" />
                                            <label htmlFor="17">17</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="18" id="18" />
                                            <label htmlFor="18">18</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="19" id="19" />
                                            <label htmlFor="19">19</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="20" id="20" />
                                            <label htmlFor="20">20</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                    <li className="seat">
                                            <input type="checkbox" value="21" id="21" />
                                            <label htmlFor="21">21</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="22" id="22" />
                                            <label htmlFor="22">22</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="23" id="23" />
                                            <label htmlFor="23">23</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="24" id="24" />
                                            <label htmlFor="24">24</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">

                                        <li className="seat">
                                            <input type="checkbox" value="25" id="25" />
                                            <label htmlFor="25">25</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="26" id="26" />
                                            <label htmlFor="26">26</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="27" id="27" />
                                            <label htmlFor="27">27</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="28" id="28" />
                                            <label htmlFor="28">28</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">

                                        <li className="seat">
                                            <input type="checkbox" value="29" id="29" />
                                            <label htmlFor="29">29</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="30" id="30" />
                                            <label htmlFor="30">30</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="31" id="31" />
                                            <label htmlFor="31">31</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="32" id="32" />
                                            <label htmlFor="32">32</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">

                                        <li className="seat">
                                            <input type="checkbox" value="33" id="33" />
                                            <label htmlFor="33">33</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="34" id="34" />
                                            <label htmlFor="34">34</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="35" id="35" />
                                            <label htmlFor="35">29</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="36" id="36" />
                                            <label htmlFor="36">36</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">

                                        <li className="seat">
                                            <input type="checkbox" value="37" id="37" />
                                            <label htmlFor="28">37</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="38" id="38" />
                                            <label htmlFor="38">38</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="39" id="39" />
                                            <label htmlFor="39">39</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="40" id="40" />
                                            <label htmlFor="40">40</label>
                                        </li>

                                    </ol>
                                </li>

                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2a">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>

                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBTn">
                                Confirm Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}
