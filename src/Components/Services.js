
import {MoreDetailsACRepair} from './MoreDetails/MoreDetailsACRepair';
import { MoreACInstall } from './MoreDetails/MoreACInstall';
import {MoreACServices} from './MoreDetails/MoreACServices';
import {MoreGasCharge} from './MoreDetails/MoreGasCharge';
import {MoreRefRepair} from './MoreDetails/MoreRefRepair';
import React, { useState } from 'react';
import './Services.css';
import v2 from '../images/v2.mp4';

export const Services = () => {

    const [openInc1,setOpenInc1]=useState(false);
    const [openInc2,setOpenInc2]=useState(false);
    const [openInc3,setOpenInc3]=useState(false);
    const [openInc4,setOpenInc4]=useState(false);
    const [openInc5,setOpenInc5]=useState(false);

    const onClickButton1 = (e)=>{
        setOpenInc1(!openInc1);
    }
    const onClickButton2 = (e)=>{
        setOpenInc2(!openInc2);
    }
    const onClickButton3 = (e)=>{
        setOpenInc3(!openInc3);
    }
    const onClickButton4 = (e)=>{
        setOpenInc4(!openInc4);
    }
    const onClickButton5 = (e)=>{
        setOpenInc5(!openInc5);
    }

  return (
    <div className='container'>
        <div className='card_outer_ser'>
            <h2>Our Services</h2>
            <div className='card_start'>

                <div className='card_extra_ser'>
                    <div >
                        {/* <img  className='tech_serv' alt='AC Repair photo' loading='lazy'/> */}
                        {/* <video src={v2} width="98%" height="300" controls="controls" autoplay='true' /> */}
                    </div>

                    <div className='include_ser'>
                        <button onClick={onClickButton1} className='btn_ser'>
                            <i className='caret down icon'></i>
                            <h1 className='title_choose_ser'>AC Repair</h1>
                        </button>
                        <div>
                            {openInc1 ? <MoreDetailsACRepair/> : ""}
                        </div>
                    </div>
                </div>


                <div className='card_extra_ser'>
                    <div>
                        {/* <img  className='tech_serv' alt='AC Repair photo' loading='lazy'/> */}
                        {/* <video src={v2} width="98%" height="300" controls="controls" autoplay /> */}
                    </div>

                    <div className='include_ser'>
                        <button onClick={onClickButton2} className='btn_ser'>
                            <i className='caret down icon'></i>
                            <h1 className='title_choose_ser'>AC Installation</h1>
                        </button>
                        <div>
                            {openInc2 ? <MoreACInstall/> : ""}
                        </div>
                    </div>
                </div>

                <div className='card_extra_ser'>
                    <div>
                        {/* <img  className='tech_serv' alt='AC Repair photo' loading='lazy'/> */}
                        
                    </div>

                    <div className='include_ser'>
                        <button onClick={onClickButton3} className='btn_ser'>
                            <i className='caret down icon'></i>
                            <h1 className='title_choose_ser'>AC Servicing</h1>
                        </button>
                        <div>
                            {openInc3 ? <MoreACServices/> : ""}
                        </div>
                    </div>
                </div>

                <div className='card_extra_ser'>
                    <div>
                        {/* <img  className='tech_serv' alt='AC Repair photo' loading='lazy'/> */}
                    </div>

                    <div className='include_ser'>
                        <button onClick={onClickButton4} className='btn_ser'>
                            <i className='caret down icon'></i>
                            <h1 className='title_choose_ser'>Gas Charging</h1>
                        </button>
                        <div>
                            {openInc4 ? <MoreGasCharge/> : ""}
                        </div>
                    </div>
                </div>

                <div className='card_extra_ser'>
                    <div>
                        {/* <img  className='tech_serv' alt='Refrigerator Repair' loading='lazy'/> */}
                    </div>

                    <div className='include_ser'>
                        <button onClick={onClickButton5} className='btn_ser'>
                            <i className='caret down icon'></i>
                            <h1 className='title_choose_ser'>Refrigerator Repair</h1>
                        </button>
                        <div>
                            {openInc5 ? <MoreRefRepair/> : ""}
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
  )
}
