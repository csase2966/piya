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
                "Description": " Wet AC Service (Window)",
                 "charges":"Rs. 500"
            },
            {
                "Description": " Wet AC Service (Split)",
                 "charges":"Rs. 500"
            },
            {
                "Description": "Gas Chargeing",
                 "charges":"Rs. 2200"
                
            },

            {
                "Description": "PCB Repair",
                 "charges":"Rs. 1500"
            },
            {
                "Description": "Dry Service",
                 "charges":"Rs. 300"
            },
            {
                "Description": "Noise Issue Repair",
                 "charges":"    Rs. 600  (Labour Charges)"
            },
            {
                "Description": "Bad Smell Issue Repair",
                 "charges":"    Rs. 600  (Labour Charges)"
            },
            {
                "Description": "AC Power ON Issue",
                 "charges":"    Rs. 450 (Labour Charges)  "
            },

        
            
            
            
            
        ];



        var body2 = [
            
            {
                "Description": "Install",
                 "charges":"Rs. 1400"
                },
                {
                    "Description": "Uninstall",
                     "charges":"Rs. 800"
                },
                {
                    "Description": "1 meter Copper Pipe set with insulation Wire",
                     "charges":"Rs. 850"
                },
    
                
    
                {
                    "Description": "Split AC wall stand",
                     "charges":"Rs. 650"
                },
                {
                    "Description": "Outdoor unit re-installed",
                     "charges":"Rs. 700"
                },
                {
                    "Description": "Indoor unit re-installed",
                     "charges":"Rs. 700"
                },
                {
                    "Description": "Drain Pipe 1 meter",
                     "charges":"Rs. 100"
                },
    
                
                {
                    "Description": "Floor Stand",
                     "charges":"Rs. 500"
                },
                {
                    "Description": "Universal back plate",
                     "charges":"Rs. 300"
                },
                {
                    "Description": "Core Cut",
                     "charges":"Rs. 90/inch"
                },
            
           
        ]



        var body3 = [
            
            {
                "Description": "Service",
                 "charges":"Rs. 450"
                },
                {
                    "Description": "Bad Smell",
                     "charges":"Rs. 450"
                },
                {
                    "Description": "Gas Charge",
                     "charges":"Rs. 1500"
                },
    
                {
                    "Description": "Power ON Issue",
                     "charges":"Rs. 2200"
                    
                },
    
                {
                    "Description": "No Cooling",
                     "charges":"Rs. 1500"
                },
    
                {
                    "Description": "Water Leak",
                     "charges":"Rs. 650"
                },
                {
                    "Description": "PCB Repair",
                     "charges":"Rs. 700"
                },
                
    
                
                
           
        ]


       
  return (
    <div className='all_details_card'>
        {/* <div className='rate_title'></div> */}
        <h1 className='types'>
            AC
        </h1>

        <div className='rate_title'>
            <div onClick={onClickButton1} className='btn_ser_rate'>
                
                <b className='title_choose_ser_rate'>1. Services    </b>
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
                
                <b className='title_choose_ser_rate'>2. Installations  </b>
                <i className='caret down icon'></i>
            </div>
            <div>
                
                {openInc2 ? <div>
                {/* <div className='labur'>Laour Charges are capped at Rs. 499 per appliance</div> */}
                
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

        <h1 className='types'>
            Fridge / Refrigerator
        </h1>


        <div className='rate_title'>
            <div onClick={onClickButton3} className='btn_ser_rate'>
                
                <b className='title_choose_ser_rate'>1. Services    </b>
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


        

    </div>
  )
}
