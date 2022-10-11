import React from 'react';
import sauce from '../assets/sauce.png'
import chef from '../assets/chef.png'
const Sauce = () => {
    return (
        <div className='sauce hidden' id='sauce'>
            <div className="container">
            <h2 className='sauce__header'>Kenapa Kami?</h2>
            <div className="sauce__container">
            <figure className='sauce__img__container'>
                <img className='sauce__img' src={sauce} alt="" />
                <div className="hover__bg"></div>
                <div className="sauce__hover">
                    <h2>Kombinasi Bahan Impor dan Lokal Pilihan</h2>
                </div>
            </figure>
            <div className="sauce__desc">
                <h2>Saus yang dibuat Homemade dengan kualitas bahan internasional</h2>
                <p>dibuat dengan 100% bahan organik</p>
            </div>
            </div>
            <div className="chef__container">
                <div className="chef__desc">
                    <h2>Chef Profesional</h2>
                    <p>Belajar langsung dengan orang lokal di desa Italia</p>
                </div>
                <figure className="chef__img__container">
                    <img src={chef} alt="" className="chef__img" />
                    <div className="hover__bg"></div>
                    <div className="chef__hover">
                        <h2>Head Chef yang mengutamakan cita rasa</h2>
                    </div>
                </figure>
            </div>
            </div>
        </div>
    );
}

export default Sauce;
