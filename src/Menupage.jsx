import React from 'react';
import { dataMenu } from './menuData';

const Menupage = () => {
    return (
        <div className='menupage'>
            <div className="container">
                <div className="menup__container">
                <h1 className='menu__h1'>Menu</h1>
                <div className="menus">
                    {dataMenu.map((menu) => {
                        return <div className="menup" key={menu.id}>
                            <figure>
                                <img className='menu__photo' src={menu.photo} alt="" />
                            </figure>
                            <div className="menu__desc">
                                <div className="menu__desc2">
                                <h2>{menu.title}</h2>
                                <p>{menu.text}</p>
                                </div>
                                <p className="price">{menu.price}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Menupage;
