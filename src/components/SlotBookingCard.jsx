import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const SlotBookingCard = ({areaName, id, availability}) => {

  const location = useLocation();
  const history = useNavigate();
  const params = useParams();

  console.log();
  
  
  const clickhandle=()=> {
    
    history(location.pathname+`/${id}`);
   console.log( location.pathname+`/${id}`);
  }

  return (
   
        
    <div className='booking-card' onClick={()=>clickhandle()}>
      <div className='booking-content'>
        <h1 className='booking-category'>{`Slot No = ${id+1}`}</h1>
        <h2 className='booking-heading'>{`Available slots = ${availability}`}</h2>
       
      </div>
    </div>

           
  
  )
}

export default SlotBookingCard

//     <div><h1>{`Slot ${slotNo} = ${availability}`}</h1></div>
