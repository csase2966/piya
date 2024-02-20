import { Advert } from './Advert';
import { WhyUs } from './WhyUs';
import './About.css';
import React from 'react'

export const About = () => {
  return (
    <div>
        <Advert/>
        <WhyUs/>

        <div className='container'>
            <div class='row1'>
                <div class="column1 card">
                    <h2>10 +</h2>
                    <p>Yearss of Experience</p>
                </div>

                <div class="column1 card">
                    <h2>5000 +</h2>
                    <p>Clients served</p>
                </div>

                <div class="column1 card">
                    <h2>25 +</h2>
                    <p>Experienced Technicians</p>
                </div>

            </div>
        </div>
    </div>
  )
}
