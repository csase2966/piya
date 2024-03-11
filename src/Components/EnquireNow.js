import React from 'react';
import {Image} from 'semantic-ui-react';
import './EnquireNow.css';
import wp from '../images/wp.jpg';
import { useState } from 'react';



 const EnquireNow = () => {
    // let url=`http://wa.me//7350235050` ;

    const [formData,setFormData]=useState({fullName:'',mobileNumber:''});

    const {fullName,mobileNumber}=formData;
    const onChange=(e)=>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(fullName +" "+mobileNumber);
        let number=7350235050;
        let url = `https://web.whatsapp.com/send?phone=${number}`;
        url+=`&name=${encodeURI(fullName)}&mobile=${encodeURI(mobileNumber)}&app_absent=0`;
        // console.log(url);
        window.open(url);


    }
   
   
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
                            <label>Name </label>
                            <input type='text' name='fullName' placeholder='Full Name'   value={fullName} onChange={onChange}
                            requied></input>
                        </div>

                        <div className='field'>
                            <label>Mobile No </label>
                            <input type='number' name='mobileNumber' id='phone' pattern='[0-9]{10}' value={mobileNumber}
                            maxLength='10'   onChange={onChange}
                             placeholder='Mobile Number' requied></input>
                        </div>

                        {/* <div className='imageWP'>
                            <Image size='small' href={url}
                            src={wp} target='_blank' alt='Whatsapp msg' centered/>
                        </div> */}
                        <div className='btn_wp'>
                        
                            <button onClick={onSubmit} style={{backgroundImage:`url(${wp})` ,backgroundSize:"cover"}} className='wpBtnInside'></button>
                        </div>
                       

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default EnquireNow;