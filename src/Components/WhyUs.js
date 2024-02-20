import './WhyUs.css';
import React from 'react';
import tech from '../images/tech.jpg';

export const WhyUs = () => {
  return (
    <div className='container'>
        <div className='card_outer'>
            <div className='card__extra'>
                <div className='title_choose'>
                    Why Choose Us 
                </div>

                <div className='three wide column'>
                    <i className='icon huge clock outline blue' loading='lazy'></i>
                </div>

                <div>
                    <div className='title_why'>
                        Quick Services
                    </div>
                    <div className='desc'>
                        We work all days a week (24 * 7) without any Holiday,
                        to help our Customers anytime & every time of any odd hour.
                    </div>
                </div>
            </div>

            <div className='card__extra'>

                <div className='three wide column'>
                    <img src={tech} className='tech' alt='techinicians' loading='lazy'></img>
                </div>

                <div>
                    <div className='title_why'>
                        Experienced Technicians
                    </div>
                    <div className='desc'>
                        We have professionally trained and experienced manpower with expertie to
                        take care of home relate problems.
                    </div>
                </div>
            </div>

            <div className='card__extra'>
                <div className='emoj'>
                    <div className='far' loading='lazy'> &#128525;</div>
                </div>

                

                <div>
                    <div className='title_why'>
                        100 % Satisfaction
                    </div>
                    <div className='desc'>
                        We work hard to deliver the best services and customer delight
                        because we value the time and trust that you invest in us.
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
