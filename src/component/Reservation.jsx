import { Button } from '@mui/material';
import React from 'react';
const Reservation = () => {
    return (
        <div className='reservation hidden' id='reservation'>
            <div className="container">
                <div className="menu__border">
                    <div className="menu__container unblur">
                        <h2>Kami Senang Menyambut Anda</h2>
                        <p>Nikmati Sensasi Santap Ditempat</p>                 
                        <Button className='home__button menu__button' onClick={() => alert("Sorry! This Function isn't applied yet, for more information contact -Email: tandicksen@gmail.com -Number:(+62)81276612000")}>Reservasi</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservation;
