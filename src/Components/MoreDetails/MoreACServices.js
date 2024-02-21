import React from 'react';
import './MoreDetailsACRepair.css';

export const MoreACServices = () => {
  return (
    <div className='all_details'>
        <div className='title_why_ser'>
            <div><i className='caret right icon'></i>Dry Servicing</div>
            <div><i className='caret right icon'></i>Wet Servicing</div>
            <div><i className='caret right icon'></i>Foam & Power Wet Servicing</div>
        </div>

        <div className='more'>
            <div className='mid_name'>How it Works?</div>
            <div><i className='caret right icon'></i>
                Pre-service Checks
            </div>
            <div><i className='caret right icon'></i>
                Indoor unit Cleaning
            </div>
            <div><i className='caret right icon'></i>
                Outdoor unit Cleaning
            </div>
            <div><i className='caret right icon'></i>
                Mess Free Experience
            </div>
            <div><i className='caret right icon'></i>
                Final Checks
            </div>
        

            <div className='note_ser'>
            
                Note-
                Ladder is not carried by Technicians.
                Please manage if AC is at a height.
            
            </div>
        </div>
    </div>
  )
}
