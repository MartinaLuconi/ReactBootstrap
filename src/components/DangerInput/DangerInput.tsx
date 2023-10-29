import React, {useState}from "react";
import Form from 'react-bootstrap';
import DangerBar from '../DangerBar/DangerBar';

const DangerInput =()=>{
    //variable q guarda el valor elegido por el usuario
    const [value,setValue]=useState(0);
    //actualiza el estado de value
    const handleChangle=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(Number(event.target.value));
    }
    
    return(
        <div className='m-3 w-50'>
            <h2>ejemplo1</h2>
        
        {/*componente padre*/}
        <Form.Range value={value} onChange={handleChangle}/>

        {/*componente hijo*/}
        <DangerBar value={value}/>
        </div>
    )
}
export default DangerInput