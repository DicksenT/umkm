import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate()
    return (
        <div className='menu hidden' id='menu'>
            <div className="container">
                <div className="menu__border">
                <div className="menu__container">
                    <h2>Jelajahi Menu Kami</h2>
                    <p>Setiap Hidangan Disajikan Dengan Kualitas Terbaik</p>
                    <Button className='home__button menu__button' onClick={() => navigate('/menu')}>Menu</Button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
