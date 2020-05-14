import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import btnOpen from '../assets/img/icons/open_menu.svg';
import btnClose from '../assets/img/icons/close_menu.svg';
import '../assets/css/components/header.css';
import { CSSTransition } from 'react-transition-group';
import { items } from '../assets/js/services'
import SocialNetwork from './SocialNetwork';
import { NavLink, Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props)
        this.header = React.createRef()

    }
    state = {
        menuSwitch: false,
        services: [],
        searchValue: '',
        servicesMatch: []
    }
    goSection = (e) => {
        let w = window
        let section = e.target.dataset.section;
        let sectionScroll = document.querySelector(`.${section}`);
        w.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': sectionScroll.offsetTop
        });

    }

    componentWillMount(){
        this.setState({
            services: items
        })
    }

    hanldeChangeSearch(e){
        const value = e.target.value
        this.setState({
            searchValue: value
        })
        let expresion = new RegExp(`${value}.*`, "i");
        let itemsFilter = this.state.services.filter(item => expresion.test(item.description))
        let itemsFive = []
        itemsFilter.map((item, i) => {
            if(i < 5){
                itemsFive.push(item)
            }
        })
        this.state.servicesMatch = itemsFive
    }

    handleSubmit(e) {
        let w = window
        e.preventDefault();
        let value = e.target.childNodes[0].value
        let result = this.state.services.filter(p => {
            return p.tag.toLowerCase().includes(value.toLowerCase())
        })

        if (result[0]) {
            w.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': 0
            });
            this.props.history.push(`/servicios/${result[0].tag}`, { id: result[0].tag })
            this.setState({ menuSwitch: !this.state.menuSwitch })
            e.target.childNodes[0].value = ""
            this.setState({
                servicesMatch: [],
                searchValue: ''
            })
        }
    }
    componentDidMount() {
        const _this = this
        const Hero = document.querySelector('.Hero') ? document.querySelector('.Hero') : document.querySelector('.ServicesHero__img_container')
                
        const observer = new window.IntersectionObserver(function(entries) {               
            const { intersectionRatio } = entries[0]; //sacamos todos los itens que estan en el viewport
            if(!intersectionRatio){      
                if(_this.header.current != null){
                   _this.header.current.classList.add('headerWhite')  
                }                                   
            }else{
                _this.header.current.classList.remove('headerWhite')  
            }
        });
        observer.observe(Hero); // le pasamos el elemento al observe
    }

    handleMenuToggle() {
        this.setState({ menuSwitch: !this.state.menuSwitch })
    }
    render() {
        const { data: menu } = this.props
        return (
            <header ref={this.header}>
                <nav>
                    <div className='Navbar__marca'>
                        <Link to="/">
                            <figure>
                                <img width="100%" height="100%" alt='Logo bozi' src={logo} />
                            </figure>
                        </Link>
                    </div>

                    <CSSTransition in={this.state.menuSwitch} timeout={300} classNames="toggleMenu" >
                        <ul className="ul-menu">
                            <div className='Navbar__btn_close' onClick={(e) => this.handleMenuToggle.bind(e)}>
                                <button><img width='20px' height='20px' src={btnClose} alt='boton open' /></button>
                            </div>
                            <li>
                                <NavLink to="/" >Inicio</NavLink>
                            </li>

                            {
                                menu.map((menuLi, index) => {
                                    if (menuLi.href != "Projects") {
                                        return (
                                            <li key={index} >
                                                <NavLink to="/" onClick={this.goSection} data-section={menuLi.href} >{menuLi.title}</NavLink>
                                            </li>
                                        )
                                    }
                                })
                            }
                            <li>
                                <form onSubmit={this.handleSubmit.bind(this)} >
                                    <input 
                                    type="search" 
                                    value={this.state.searchValue} 
                                    onChange={this.hanldeChangeSearch.bind(this)}
                                    placeholder="Buscar..." />
                                    {
                                        (this.state.searchValue && this.state.servicesMatch.length) ?
                                        <ul>
                                            {
                                                this.state.servicesMatch.map(item => {
                                                    return <li>
                                                        <Link onClick={() => this.setState({ servicesMatch: [], searchValue: '' })} to={`/servicios/${item.tag}`}>{item.description}</Link>
                                                    </li>                                                   
                                                })
                                            }
                                        </ul> : ''
                                    }
                                     {
                                        (this.state.searchValue && !this.state.servicesMatch.length) &&
                                            <ul>
                                                <li>sin resultados</li>
                                            </ul>                                                
                                    }

                                 
                                </form>

                            </li>
                            <SocialNetwork />
                        </ul>
                    </CSSTransition>
                </nav>
                <div className='Navbar__btn_open' onClick={this.handleMenuToggle.bind(this)}>
                    <button><img src={btnOpen} alt='boton open' /></button>
                </div>

            </header >
        )
    }
}

export default Header;