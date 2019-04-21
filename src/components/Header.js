import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import btnOpen from '../assets/img/icons/open_menu.svg';
import '../assets/css/components/header.css';
class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <div className='Navbar__marca'>
                        <figure>
                            <img width="100%" height="100%" alt='Logo bozi' src={logo} />
                        </figure>
                    </div>
                    <ul>
                        <li>
                            <a href="javascript:void(0)">Home</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Servicios</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Nosotros</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Contactanos</a>
                        </li>
                    </ul>
                </nav>
                <div className='Navbar__btn_menu'>
                    <span><img width='20px' height='20px' src={btnOpen} alt='boton open' /></span>
                </div>

            </header >
        )
    }
}

export default Header;