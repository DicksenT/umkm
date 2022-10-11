import React from 'react';
import { useNavigate } from 'react-router-dom';
import umkmLogo from '../assets/newLogo.png'
import { Links } from '../dataLink';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='nav'>
            <div className="container">
                <div className="nav__container">
                <figure className='logo__container' onClick={() => navigate('/')}>
                    <img src={umkmLogo} alt=""  className='logo'/>
                </figure>
                <div className="nav__link__container">
                    <ul className='nav__links'>
                        {
                            Links.map(link =>{
                                return <a href={link.url} key={link.id}><li className='nav__link link__hover--effect'>{link.text}</li></a> 
                            })
                        }
                       
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
