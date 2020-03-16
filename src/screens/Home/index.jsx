import React from "react";
import '../../desktop.css';
import Nav from '../../components/Nav';
import NavC from '../../components/NavCategory';
import Carousel from '../../components/Carousel';
import Payments from '../../components/Payments';
import Slider1 from '../../components/Slider';
import Slider2 from '../../components/Slider2';
import Slider3 from '../../components/Slider3';
import Ticket from '../../components/HomeTicket';
import Banner from '../../components/HomeBanner';
import Explore from '../../components/Explore';
import Finding from '../../components/Finding';
import Finding2 from '../../components/FindTwo';
import Footer from '../../components/Footer';
import SliderCategory from '../../components/SliderCategory';
import Information from '../../components/InformationUser';
import Novedades from '../../components/NovedadesBlog';
import Register from '../../components/user/registration.jsx';
import Login from '../../components/user/login';
import LazyLoad from 'react-lazyload';
import Account from '../../components/account/account';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Forget from '../../components/user/forget';
import RenovatePass from '../../components/user/renovatePassword';
import Category from '../../components/Category';
import CompleteCategory from '../../components/CompleteCategory';
import InfoAccount from '../../components/account/account';
import Search from '../../components/search/Search';
import Privacity from '../../components/Privacity';
import Terms from '../../components/Terms';
import Help from '../../components/help';
import Apps from '../../components/apps';
import Market from '../../components/market';

const Home = () => {
  return (
    <section>
        <Nav />
        <NavC />
        <Carousel />
        <Payments />
        <Slider1 />
        <Slider2 />
        <Ticket />
        <LazyLoad>
        <Banner />
        </LazyLoad>
        <Explore/>
        <Finding/>
        <SliderCategory/>
        <Finding2/>
        <Slider3/>
        <Information/>
        <Novedades/>
        <Footer/>
    </section>
  );
};

export default Home;
