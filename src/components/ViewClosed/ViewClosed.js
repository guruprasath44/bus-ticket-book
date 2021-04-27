import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewClosed.css'
import * as ReactBootStrap from 'react-bootstrap'
export default function ViewClosed () {
  const [tickets, setTickets] = useState([])
  const [details, setDetail] = useState([])

  useEffect(() => {
    axios.get('https://bus-ticket-booking-app.herokuapp.com/bus/ticket/viewClosed').then((res) => {
      setTickets(res.data)
    }, [])
  })
  const renderTicket = (ticket, index) => {
    axios.get(`https://bus-ticket-booking-app.herokuapp.com/bus/pass/${ticket._id.toString()}`).then((res) => {
      setDetail(res.data)
      console.log(details)
    }, [])
    return (

                <button title={details.name} className="btn btn-info hov seat-info" key={index} >
                    <td style={{ backgroundColor: 'darkblue', borderColor: 'darkblue', width: '40px' }}>{ticket.seatID}</td>
                </button>

    )
  }

  return (
        <div className="ss">
            <div className="row">
                <div className="columnb">
                    <div className="plane">
                        {/* <form >

                        </form> */}
                    </div>
                </div>
                <div className="column2 ">
                    <div className="seatInfo  ">

                        <div>
                            <button style={{ marginLeft: '0px', width: '100%', height: '60px' }} className="btn  btn-info  seatBT">
                              View Closed Tickets
                            </button>

                            <br></br>
                            <ReactBootStrap.Table >
                              <br></br>
                             <tbody className="info" >

                            {/* <span class="extra-info ">
                            <ul >
                            <li>Name:{details.name}</li>
                            <li>Age : { details.age}</li>

                            <li>Email ID:{ details.email}</li>
                        </ul>

                            </span> */}
                            {tickets.map(renderTicket)}
                            </tbody>

                             </ReactBootStrap.Table>

                             </div>
                        </div>
                   </div>
             </div>
        </div>
  )
}
