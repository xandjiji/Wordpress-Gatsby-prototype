import React from 'react';
import PageHero from './PageHero.styled';

export default ({ text }) => {
    return <PageHero className="container">{text}</PageHero>
}