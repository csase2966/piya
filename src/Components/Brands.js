import './Brands.css';
import Image from 'react-bootstrap/Image';
import React from 'react';
import LG from '../images/lg.jpg';
import Voltas from '../images/voltas.jpg';
import Bluestar from '../images/blue_star.jpg';
import Daikin from '../images/daikin.jpg';
import ac from '../images/ac_f.jpg';

export const Brands = () => {
  return (
    <div>
        <div className='card1'>
            <div className='card__header'>
                <h5>AC and Fridge</h5>
                <h5><b>Repair, Installation, Buy and Sale</b></h5>
            </div>

            <div className='card__body'>
                <span>
                    We Provides services for All Brands
                </span>
                <span>
                    <p class='ui tiny images'>
                        <Image src={LG} size='tiny' alt='LG' loading='lazy'/>
                        <Image src={Voltas} size='tiny' alt='Voltas' loading='lazy'/>
                        <Image src={Bluestar} size='tiny' alt='Blue Star' loading='lazy'/>
                        <Image src={Daikin} size='tiny' alt='Daikin' loading='lazy'/>
                    </p>
                </span>
            </div>

            <div className='card__footer'>
                <div className='card__footer_first'>
                    <Image src={ac}  thumbnail fluid alt='AC' loading='lazy'/>
                </div>

                {/* <div className='card__footer_second'>
                    <Image size='small' thumbnail fluid alt='Fridge' loading='lazy'/>
                </div>

                <div className='card__footer_third'>
                    <Image size='small' thumbnail fluid alt='DiFridge' loading='lazy'/>
                </div> */}

            </div>

            <div className='card__extra'>
                <br></br>
                <div class='three wide column'>
                    <i class='icon huge clock outline blue'></i>
                </div>
            

            <div className='quality'>
                Quality Assured Services Doorstep repair within 45 mins
            </div>

            <div>
                <div className='call_button'>
                    <a href='tel:8856935638' className='btn btn-success'>
                        <i class='phone volume icon'></i>
                        Call Now
                    </a>
                </div>
            </div>

            </div>

        </div>
    </div>
  )
}
