import React from 'react'
import { useParams } from 'react-router-dom'


const ConfirmSlots = () => {

    const {areaName, id} = useParams();
    console.log(areaName);
    console.log(id);

  return (
    <>
        <button>Submit</button>
    </>
  )
}

export default ConfirmSlots