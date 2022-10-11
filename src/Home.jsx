import React from 'react';
import { Button } from '@mui/material';
import Sauce from './component/Sauce';
import Menu from './component/Menu';
import Location from './component/Location';
import Reservation from './component/Reservation';
import About from './component/About';
import { useNavigate } from 'react-router-dom';


const Home = () => {
   const navigate = useNavigate()
    return (
        <>
        <div className='home' id='home'>
            <div className="home__desc__container">
                    <h2 className='home__header'>Italian Authentic Cuisine</h2>
                    <p className='home__para'>Nikmati Sensasi Autentik Italia Menari di Lidah Anda</p>
                    <Button className='home__button' onClick={() => navigate('/menu')}>Menu</Button>
            </div>
        </div>
        <Sauce/>
        <Menu/>
        <Location/>
        <Reservation/>
        <About/>
        </>
    );
}

export default Home;
