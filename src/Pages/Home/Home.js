import React from 'react';
import About from '../../components/About/About';
import ContactMe from '../../components/ContactMe/ContactMe';
import Header from '../../components/Header/Header';
import MyProjects from '../../components/MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;