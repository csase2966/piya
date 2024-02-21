// import 'semantic-ui-css/semantic.min.css';
import './Home.css';
import React from 'react';
import {Brands} from './Brands';
import first from '../images/first.jpg';
import Image from 'react-bootstrap/Image';


export const Home=()=> {
  return (
    <div>
        <div className='containerImage'>
                        
            <div className="text-center">
                <img src={first} class="rounded" alt="image" width='100%'/>
            </div>
                        
                        
        </div>
        <div className='bestAC'>
            Best AC Repair Sevice in PCMC and Pune

        </div>

        <div class='container'>
            <div className='first_name'>
                Eagle Refigeration
            </div>

        



        <div class='row'>
            <div class='col card'>
                <div class='card-body'>

                    <h5 class='card-title'>Air Conditioner</h5>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Repair</p>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Insulation</p>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Gas Charging</p>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Sevicing</p>
                </div>
            </div>

            <div class='col card'>
                <div class='card-body'>

                    <h5 class='card-title'>Window AC</h5>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Repair</p>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Insulation</p>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Gas Charging</p>
                    <p class="card-text"><i class='caret bookmark icon'></i>AC Sevicing</p>
                </div>
            </div>

            <div class='col card'>
                <div class='card-body'>

                    <h5 class='card-title'>Refrigeration</h5>
                    <p class="card-text"><i class='caret bookmark icon'></i>Fridge Repair</p>
                    
                    <p class="card-text"><i class='caret bookmark icon'></i>Fridge Gas Filling</p>
                    
                </div>
            </div>

        </div>
        </div>
        
        <Brands/>


    </div>
  )
}
