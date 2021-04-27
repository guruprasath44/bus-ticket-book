import React, { useState } from 'react'
import axios from 'axios'
import './ViewOpened.css'
import * as ReactBootStrap from 'react-bootstrap'
export default function ViewOpened () {
  const [tickets, setTickets] = useState([])
  const [details, setDetail] = useState([false])

  const handleSubmitDetails = () => {
    axios.get('https://bus-ticket-booking-app.herokuapp.com/bus/ticket/viewOpen').then((res) => {
      setTickets(res.data)
    }, [])
  }
  const renderTicket = (ticket, index) => {
    axios.get(`https://bus-ticket-booking-app.herokuapp.com/bus/pass/${ticket._id.toString()}`).then((res) => {
      setDetail({ ...res.data })
      console.log(details)
    }, [])
    return (
                <tr className="btn btn-info " key={index} >
                    <td style={{ backgroundColor: 'darkblue', borderColor: 'darkblue', width: '40px' }}>{ticket.seatID}</td>
                </tr>
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
                <div className="column2">
                    <div className="seatInfo">

                        <div>
                            <button onClick={ handleSubmitDetails()} style={{ marginLeft: '0px', position: 'relative', width: '100%', height: '60px' }} className="btn btn-info seatBT">
                              View Opened Tickets
                            </button>

                            <ReactBootStrap.Table >
                              <br></br>
                            <tbody className="info"> <span className="extra-info">

                        <ul >

                            <li>Name:{details.name}</li>
                            <li>Age : { details.age}</li>

                            <li>Email ID:{ details.email}</li>
                        </ul>
                            </span>
                            <a href='/Admin/pass/'>
                            {/* <button  style={{marginLeft: "0px",width:"100%",height:"60px"}} className="btn btn-info seatBT">
                              View pass
                            </button> */}
                            </a>
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
