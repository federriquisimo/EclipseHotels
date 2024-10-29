import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';




function EnContruccion({match}) {
    
    const {totalamount} = useParams()
    const  [loading, setloading]  = useState(false);
    const  [error, seterror]  = useState();

    console.log(totalamount)
    
async function volver() {
   
       
        window.location.href='/home'

    } 
   

    return (
        <div>
            {loading && (<Loader/>)}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5'>
                    {error && (<Error message='invalid Credentionals'/>)}
                    <div className='bs'>
                    <h1>Paga tu reserva  </h1>
                    <h1>Valor  :  {totalamount} </h1>
                    <h1>Cuenta de ahorros : 78859-99555</h1>
                    <h1>Bancolombia </h1>
                    <br></br>
                    <br></br>
                    <p> Al enviar el comprobante tu reserva estará terminada </p>
                    
                    
                    <button className='btn btn-primary mt-3' onClick={volver}>Volver</button>               
                    </div>
            
                </div>
            
            </div>
            
        </div>
    )
}
export default EnContruccion