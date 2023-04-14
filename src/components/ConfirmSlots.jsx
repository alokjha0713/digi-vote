import React from 'react'
import { useParams } from 'react-router-dom'
import DocumentUpload from './DocumentsUpload';
import { useDispatch, useSelector } from 'react-redux';
import { updateSlotDetails } from '../actions/slotsAction';


const ConfirmSlots = () => {

    const dispatch = useDispatch();


    const {areaName, id} = useParams();
    console.log(areaName);
    console.log(id);

    

  return (
    <>
        <DocumentUpload areaName={areaName} id={id}/>
        
    </>
  )
}

export default ConfirmSlots