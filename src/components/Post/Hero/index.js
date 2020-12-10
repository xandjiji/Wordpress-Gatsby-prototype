import React from 'react';
import Img from 'gatsby-image';
import Hero from './Hero.styled';

export default ({ imageData, title, date }) => {
    const dateObj = new Date(date);

    return (
        <Hero>
            <div className="text-wrapper">
                <span className="title">{title}</span>
                <span className="date">{`${dateObj.getDay()} . ${dateObj.getMonth()} . ${dateObj.getFullYear().toString().substring(2)}`}</span>
            </div>
            <Img
                fluid={imageData.localFile.childImageSharp.fluid}
                title={imageData.title ? imageData.title : title}
                alt={imageData.alt_text ? imageData.alt_text : title}
            />
        </Hero>
    );
}