import './RateCard.css';
import { useState } from 'react';
import React from 'react';

export const RateDetails = () => {

    const [openInc1,setOpenInc1]=useState(false);
    const [openInc2,setOpenInc2]=useState(false);
    const [openInc3,setOpenInc3]=useState(false);

    const onClickButton1 = (e)=>{
        setOpenInc1(!openInc1);
    }
    const onClickButton2 = (e)=>{
        setOpenInc2(!openInc2);
    }
    const onClickButton3 = (e)=>{
        setOpenInc3(!openInc3);
    }

    var heading = ["#", "Description", "Service Charges"];
    var body1 = [
            {
            "Description": "Install",
             "charges":"Rs. 2499"
            },
            {
                "Description": "Uninstall",
                 "charges":"Rs. 999"
            },
            {
                "Description": "1 meter Copper Pipe set with insulation Wire",
                 "charges":"Rs. 900"
            },
            {
                "Description": "Split AC wall stand",
                 "charges":"Rs. 750"
            },
            {
                "Description": "Outdoor unit re-installed",
                 "charges":"Rs. 799"
            },
            {
                "Description": "Indoor unit re-installed",
                 "charges":"Rs. 699"
            },
            {
                "Description": "Drain Pipe 1 meter",
                 "charges":"Rs. 100"
            },

            {
                "Description": "Fastner Compelete Set",
                 "charges":"Rs. 200"
            },
            {
                "Description": "Floor Stand",
                 "charges":"Rs. 550"
            },
            {
                "Description": "Universal back plate",
                 "charges":"Rs. 300"
            },
            {
                "Description": "Power Jet AC service (Window)",
                 "charges":"Rs. 449"
            },
            {
                "Description": "Power Jet AC service (Split)",
                 "charges":"Rs. 499"
            },
            {
                "Description": "Service lite",
                 "charges":"Rs. 449"
            },
            
            
        ];



        var body2 = [
            {
            "Description": "Fan motor - Split AC ",
             "charges":"   Rs. 1800 "
            },
            {
                "Description": "Blower Motor - Split AC",
                 "charges":"   Rs. 2200 "
            },
            {
                "Description": "Blower replaced ",
                 "charges":"    Rs. 1100 "
            },
            {
                "Description": "Replace Flap/Swing Motor",
                 "charges":"    Rs. 400 "
            },
            {
                "Description": "Motor Bearing Change",
                 "charges":"    Rs. 1000  "
            },
            {
                "Description": "Fan motor Window AC",
                 "charges":"     Rs. 2600 "
            },
            {
                "Description": "Noise issue Repair",
                 "charges":"    Rs. 0  "
            }
        ];


        var body3 = [
            {
            "Description": "Gas Chargeing",
             "charges":"Rs. 2500"
            },
            {
                "Description": "Replacement Compressor (1 ton)",
                 "charges":"Rs. 4000"
            },
           
        ]


       
  return (
    <div className='all_details_card'>
        {/* <div className='rate_title'></div> */}

        <div className='rate_title'>
            <div onClick={onClickButton1} className='btn_ser_rate'>
                
                <b className='title_choose_ser_rate'>1. Service and Installation  </b>
                <i className='caret down icon'></i>
            </div>
            <div>
                {openInc1 ? 
                
        <table class="table">
        <thead className="thead-dark">
            <tr>
            {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
            
            </tr>
        </thead>
        <tbody>
            
            
            {body1.map((val,i) => (
                <tr>
                <td >{(i+1)*1}</td>
                <td >{val.Description}</td>
                <td >{val.charges}</td>
                </tr>
            ))}
            
            
            
        </tbody>
        </table>
                
                : ""}
            </div>
        </div>






        <div className='rate_title'>
            <div onClick={onClickButton2} className='btn_ser_rate'>
                
                <b className='title_choose_ser_rate'>2. Fan Motors  </b>
                <i className='caret down icon'></i>
            </div>
            <div>
                
                {openInc2 ? <div>
                <div className='labur'>Laour Charges are capped at Rs. 499 per appliance</div>
                
        <table class="table">
        <thead className="thead-dark">
            <tr>
            {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
            
            </tr>
        </thead>
        <tbody>
            
            
            {body2.map((val,i) => (
                <tr>
                <td >{(i+1)*1}</td>
                <td >{val.Description}</td>
                <td >{val.charges}</td>
                </tr>
            ))}
            
            
            
        </tbody>
        </table>
        </div>
                
                : ""}
            </div>
        </div>





        <div className='rate_title'>
            <div onClick={onClickButton3} className='btn_ser_rate'>
                
                <b className='title_choose_ser_rate'>3. Gas Charging  </b>
                <i className='caret down icon'></i>
            </div>
            <div>
                {openInc3 ? 
                
        <table class="table">
        <thead className="thead-dark">
            <tr>
            {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
            
            </tr>
        </thead>
        <tbody>
            
            
            {body3.map((val,i) => (
                <tr>
                <td >{(i+1)*1}</td>
                <td >{val.Description}</td>
                <td >{val.charges}</td>
                </tr>
            ))}
            
            
            
        </tbody>
        </table>
                
                : ""}
            </div>
        </div>
        


    </div>
  )
}
