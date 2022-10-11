import React from 'react';
import map from '../assets/map.svg'

const Location = () => {
    return (
        <div className='map hidden' id='map'>
                  <h1>L o k a s i</h1>
            <div className="map__container">
          
            <figure className='map__img__container'>
                <img src={map} alt="" className='map__img'/>
            </figure>
            <ul className="map__locations">
                <li className='map__location'>
                    <h3>Grand Indonesia</h3>
                    <p>Jakarta Pusat</p>
                </li>
                <li className='map__location'>
                    <h3>Central Park Mall</h3>
                    <p>Jakarta Barat</p>
                </li>
                <li className='map__location'>
                    <h3>Pakuwon Mall Surabaya</h3>
                    <p>Surabaya</p>
                </li>
                <li className='map__location'>
                    <h3>Grand Batam</h3>
                    <p>Batam</p>
                </li>
                <li className='map__location'>
                    <h3>Trans Studio Mall</h3>
                    <p>Bandung</p>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Location;
