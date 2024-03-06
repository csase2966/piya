import './RateCard.css';
import React from 'react';
import {RateDetails} from './RateDetails';
import { useState } from 'react';

export const RateCard = () => {
    const [openInc1,setOpenInc1]=useState(false);

    const onClickButton1 = (e)=>{
        setOpenInc1(!openInc1);
    }
  return (
    <div className='container_adv'>
        <div className='card_outer_ser_rate'>
        <h2>Rate Card</h2>
            

            <div className='card_start_rate'>
            

                <div className='card_extra_ser'>
                   <h3 className='summer'>Summer Around the Corner! </h3>
                   <br/>
                   <div><h4>Get our best charges for the season,
                   Details are as follows-</h4></div>

                    <div className='include_ser'>
                        {/* <button onClick={onClickButton1} className='btn_ser'>
                            <i className='caret down icon'></i>
                            <b className='title_choose_ser'>Rate in Details</b>
                        </button>
                        <div>
                            {openInc1 ? <RateDetails/> : ""}
                        </div> */}
                        <RateDetails/> 
                    </div>
                </div>

            </div>



        </div>
        
    </div>
  )
}
