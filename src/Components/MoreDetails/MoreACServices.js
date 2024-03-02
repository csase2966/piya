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
                Pre-service Checks- 
                Detailed inspection including Gas check to identify repairs.
            </div>
            <div><i className='caret right icon'></i>
                Indoor unit Cleaning- 
                Deep cleaning of filters, coil, fins, drain trays with foam and Powerjet after covering the AC.
            </div>
            <div><i className='caret right icon'></i>
                Outdoor unit Cleaning- 
                Opening of the unit (If easily accessible) for thorough cleaning with a powerjet.
            </div>
            <div><i className='caret right icon'></i>
                Mess Free Experience- 
                AC jacked for spill prevention during service and post-service clean up of the work area.
            </div>
            <div><i className='caret right icon'></i>
                Final Checks- 
                Technicians ensures propr functions by cheking pipe Blockage anddrain tray leakage at the end of service.
            </div>
        

            <div className='note_ser'>
            
                Note-
                Our Technicians do not carry a ladder please arrange for one if the AC is at a height.
            
            </div>
        </div>
    </div>
  )
}
