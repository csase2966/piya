import React from 'react';
import './MoreDetailsACRepair.css';

export const MoreACInstall = () => {
  return (
    <div className='all_details'>
        <div className='title_why_ser'>
            <div><i className='caret right icon'></i>Windows AC - 1200</div>
            <div><i className='caret right icon'></i>Split AC - 1500</div>
        </div>

        <div className='moreAC'>
            <div className='mid_name'>What's Included</div>
            <div><i className='caret right icon'></i>
                Drilling wiring Connections, Installation of the units (Indoor and Outdoor) and Pipe Fixes.
            </div>
            <div><i className='caret right icon'></i>
                Gas check to Prevent leakages.
            </div>
            <div><i className='caret right icon'></i>
                Cooling rate and device checks followed by clea up of service area.
            </div>
            
        </div>

        <div className='moreAC'>
            <div className='mid_name'>Excluded</div>
            <div><i className='caret right icon'></i>
                Uninstallation of the existing AC.
            </div>
            <div><i className='caret right icon'></i>
                Spare parts like Copper wires and Pipes (extra charges as per rate card)
            </div>
            <div><i className='caret right icon'></i>
                Stands and Fastner (For fixing stand)
            </div>
            <div><i className='caret right icon'></i>
                Masonary / Woodwork
            </div>
            <div><i className='caret right icon'></i>
                Pop filling
            </div>
            <div><i className='caret right icon'></i>
                We do not carry a ladder, please arrange one Before the service.
            </div>
        </div>
    </div>
  )
}
