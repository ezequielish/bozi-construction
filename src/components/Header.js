import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import btnOpen from '../assets/img/icons/open_menu.svg';
import btnClose from '../assets/img/icons/close_menu.svg';
import '../assets/css/components/header.css';
import { CSSTransition } from 'react-transition-group';
import { backgroundEffect } from '../assets/js/effects';
import SocialNetwork from './SocialNetwork';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    state = {
        menuSwitch: false,
        services: ''
    }
    oddEvent = (e) => {
        let section = e.target.dataset.section;
        let sectionScroll = document.querySelector(`.${section}`);
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': sectionScroll.offsetTop
        });

    }


    handleSubmit(e) {
        e.preventDefault();
        let value = e.target.childNodes[0].value
        let result = this.state.services.filter(p => {
            return p.title.toLowerCase().includes(value.toLowerCase())
        })

        if (result[0]) {
            this.props.history.push(`/servicios/${result[0].tag}`, { id: result[0].tag })
            this.setState({ menuSwitch: !this.state.menuSwitch })
            e.target.childNodes[0].value = ""
        }
    }
    componentDidMount() {
        const { services } = this.props
        this.setState({
            services: services.services
        })
        window.addEventListener('scroll', () => {

            let element = document.querySelector('header');
            let elementTwo = document.querySelector('.Services');
            if (elementTwo == null) {
                elementTwo = document.querySelector('.ServicesHero__description_container');
            }

            let screenSize = innerWidth;
            if (screenSize <= 1000) {
                backgroundEffect(element, elementTwo, 0, 1);
            }
        })
    }
    handleMenuToggle() {
        this.setState({ menuSwitch: !this.state.menuSwitch })
    }
    render() {
        const { data: menu } = this.props
        // console.log(this.state.services)
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
                                <NavLink to="/" >Inicio</NavLink>
                            </li>

                            {
                                menu.map((menuLi, index) => {
                                    if (menuLi.href != "Projects") {
                                        return (
                                            <li key={index} >
                                                <NavLink to="/" onClick={this.oddEvent} data-section={menuLi.href} >{menuLi.title}</NavLink>
                                            </li>
                                        )
                                    }
                                })
                            }
                            <li>
                                <form onSubmit={this.handleSubmit.bind(this)} >
                                    <input type="search" placeholder="Buscar..." />
                                </form>

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