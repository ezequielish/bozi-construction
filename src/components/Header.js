import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import btnOpen from '../assets/img/icons/open_menu.svg';
import btnClose from '../assets/img/icons/close_menu.svg';
import '../assets/css/components/header.css';
import { CSSTransition } from 'react-transition-group';
import { backgroundEffect } from '../assets/js/effects';
import SocialNetwork from './SocialNetwork';
class Header extends Component {
    state = {
        menuSwitch: false
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            let element = document.querySelector('header');
            let elementTwo = document.querySelector('.Services');
            let screenSize = innerWidth;
            if (screenSize <= 1000) {
                backgroundEffect(element, elementTwo, 0, 1);
            }
        })
    }
    handleMenuToggle() {
        this.setState({ menuSwitch: !this.state.menuSwitch })
        console.log(this.state.menuSwitch)
    }
    render() {
        return (
            <header>
                <nav>
                    <div className='Navbar__marca'>
                        <figure>
                            <img width="100%" height="100%" alt='Logo bozi' src={logo} />
                        </figure>
                    </div>

                    <CSSTransition in={this.state.menuSwitch} timeout={400} classNames="toggleMenu" >
                        <ul>
                            <div className='Navbar__btn_close' onClick={this.handleMenuToggle.bind(this)}>
                                <span><img width='20px' height='20px' src={btnClose} alt='boton open' /></span>
                            </div>
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
                            <li>
                                <input type="search" placeholder="Buscar..." />
                            </li>
                            <SocialNetwork />
                        </ul>
                    </CSSTransition>
                </nav>
                <div className='Navbar__btn_open' onClick={this.handleMenuToggle.bind(this)}>
                    <span><img src={btnOpen} alt='boton open' /></span>
                </div>

            </header >
        )
    }
}

export default Header;