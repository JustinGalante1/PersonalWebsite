import React, { Component } from 'react'

import Hero from '../components/Hero';

function HomePage(props){
    return (
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}></Hero>
    );
}

export default HomePage;
