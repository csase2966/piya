
import './Contact.css';
import { Button,Icon } from 'semantic-ui-react';
import React from 'react';

export const Contact = () => {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>

                    <div className='social_media'>
                        <Button color='youtube'>
                            <Icon name='google'>Mail</Icon>
                        </Button>
                        <p>eagle.racsystems2020@gmail.com</p>
                    </div>
                </div>

                <div className='sb_footer-links-div'>

                    <div className='social_media'>
                        <Button color='facebook'>
                            <Icon name='phone'>Phone No</Icon>
                        </Button>
                        <p>8856935638 / 7350235050</p>
                    </div>
                </div>

                <div className='sb_footer-links-div'>

                    <div className='social_media'>
                        <Button color='instagram'>
                            <Icon name='map marker alternate'>Address</Icon>
                        </Button>
                        <div className='address'>
                            <div>Office No-6, Bhosale Building,</div>
                            <div>Koyana Market, Shrikrishna Nagar</div>
                            <div>Vitthalwadi, Akurdi.  Pune-411 035
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
