
import React , {useState, useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import {Link} from 'react-router-dom'



function Bookingscrren({match}) {

    const {roomid} = useParams()
    const {fromdate} = useParams()
    const {todate}  = useParams()

    const  [loading, setloading]  = useState(true);
    const  [error, seterror]  = useState();
    const  [room, setroom]  = useState();

    const fromdate1 = moment(fromdate, 'DD-MM-YY')
    const todate1 = moment(todate, 'DD-MM-YY')

    const totaldays = moment.duration(todate1.diff(fromdate1)).asDays()+1
    const [totalamount, settotalamount] = useState()

    useEffect(() => {

        async function fetchData() {
            try{
                setloading(true);
                const data = (await axios.post('/api/rooms/getroombyid' , {roomid : roomid})).data

                  settotalamount(data.rentperday * totaldays)
                   setroom(data)
                    console.log(data)
                    setloading(false)
        
            }catch(error){
  
                  setloading(false)
                  seterror(true)
            }
        
            }
          fetchData();
            
    }, []);

    async function bookRoom(){


      window.location.href='/enConstruccion'

    /*  const bookingDetails ={

        room,
        userid: JSON.parse(localStorage.getItem('currentUser'))._id,
        fromdate,
        todate,
        totalamount,
        totaldays
      }

      try {
        
        const result = await axios.post('/api/bookings/bookroom', bookingDetails)
      } catch (error) {

      }*/
    }

  
    return (
        <div className='m-5'>

           {loading ? (<Loader/>) : room ? (<div>
            
                <div className="row justify-content-center mt-5 bs">

                  <div className='col-md-6'>
                      <h1>{room.name}</h1>
                      <img src={room.imageurls[0]} className='bigimg'/>
                  </div>

                  <div className='col-md-6'>
                    <div style={{textAlign:'right'}}>
                    <h1>Detalles Reserva</h1>
                    <hr/>
                    
                    <b>
                    <p>Nombre : {JSON.parse(localStorage.getItem('currentUser')).name} </p>
                    <p>Fecha entrada : {fromdate} </p>
                    <p>Fecha salida : {todate}</p>
                    <p>Max Capacidad : {room.maxCount}</p>
                    </b>
                    </div>
                    
                    <div style={{textAlign:'right'}}>
                        <b>
                        <h1>Cuenta</h1>
                        <hr/>
                        <p>Total días : {totaldays}</p>
                        <p>Valor-día : {room.rentperday}</p>
                        <p>Cuenta total : {totalamount}</p>
                        </b>
                    </div>

                    <div style={{float:'right'}}>
                    <Link to={`/enConstruccion/${totalamount}`}>
                      <button className='btn btn-primary' >Paga aquí</button>
                    </Link>

                      
                    </div>

                  </div>

              </div>

            </div>): (<Error/>)}
          
        </div>
 );
}

export default Bookingscrren;