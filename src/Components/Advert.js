import './Advert.css';
import React from 'react'

export const Advert = () => {
  return (
    <div className='container_adv'>
        <div className='card_outer_adv'>
            <div className='card__extra_adv'>
            <div className='title_choose_adv'>
                Quick and Reliable Doorstep Service
            </div>

            <div>
                <div className='title_why_adv'>
                    CALL US NOW FOR AC REPAIR SERVICES
                </div>
                <div style={{flex:1,height:'1px', backgroundColor:'white'}}/>
                <div className='desc_adv'>
                    CALL ON - 7350235050 / 8856935638
                </div>

            </div>
        </div>

        </div>
    </div>
  )
}
