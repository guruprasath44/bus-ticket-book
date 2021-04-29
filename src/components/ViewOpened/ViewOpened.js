import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewOpened.css'
import * as ReactBootStrap from 'react-bootstrap'
export default function ViewOpened () {
  const [tickets, setTickets] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [details, setDetail] = useState(false)

  useEffect(() => {
    axios.get('https://bus-ticket-booking-app.herokuapp.com/bus/ticket/viewOpen').then((res) => {
      setTickets(res.data)
    })
  }, [])
  return (<>
  { tickets.map((i, j) => {
    return (
      <>
       <div className="ss">
            <div className="row">

                <div className="column2 ">
                    <div className="seatInfo  ">

                        <div>
                            <button style={{ marginLeft: '0px', width: '100%', height: '60px' }} className="btn  btn-info  seatBT">
                               Opened Tickets
                            </button>

                            <br></br>
                            <ReactBootStrap.Table >
                              <br></br>
                             <tbody className="info" >

                <button onClick={() => setDetail(true)} className="btn btn-info " >

                    <td style={{ backgroundColor: 'darkblue', borderColor: 'darkblue', width: '40px' }}>{i.seatID}</td>
                </button>

                {ShowDetails ? (<ShowDetails id= {i._id} setDetail={setDetail}/>) : null}

            </tbody>

        </ReactBootStrap.Table>

                    </div>
              </div>
       </div>
    </div>
</div>
</>

    )
  })}
    </>
  )
}

const ShowDetails = (id, setDetail) => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [age, setage] = useState()
  useEffect(() => {
    axios.get(`https://bus-ticket-booking-app.herokuapp.com/bus/pass/${id.id}`).then((res) => {
      setname(res.data.name)
      setemail(res.data.email)
      setage(res.data.age)
    })
  }, [id])

  return (

                <button className="btn  " style={{ textAlign: 'left', marginleft: '-40px', color: 'white' }}>
                  Name:{name}
                  <br />
                  Email:{email}
                  <br />
                  Age:{age}

                </button>

  )
}
