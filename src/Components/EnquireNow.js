import React from 'react';
import {Image} from 'semantic-ui-react';
import './EnquireNow.css';
import wp from '../images/wp.jpg';
import { useState } from 'react';



 const EnquireNow = () => {
    let url=`http://wa.me//7350235050` ;
   
   
  return (
    <div className='page-login  start'>
        <div className='ui centered grid container'>
            <div className='full wide column'>
                <div className='ui fluid card'>
                    <div className='enquiry_title'>
                        Enquire Now
                    </div>

                    <form className='ui form'  >
                        <div className='field'>
                            <label>Name <p1>*</p1></label>
                            <input type='text' name='name' placeholder='Full Name'  
                            requied></input>
                        </div>

                        <div className='field'>
                            <label>Mobile No <p1>*</p1></label>
                            <input type='text' name='phone' id='phone' pattern='[0-9]{10}'
                            maxLength='10'  
                             placeholder='Mobile Number' requied></input>
                        </div>

                        <div className='imageWP'>
                            <Image size='small' href={url}
                            src={wp} target='_blank' alt='Whatsapp msg' centered/>
                        </div>
                        {/* <button type='submit' >Chat on WP</button> */}

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default EnquireNow;