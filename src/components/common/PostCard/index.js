import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import MaterialContainer from '../MaterialContainer';

import { getPathname } from '../../../utils/getPathname';


export default ({ post }) => {

    const { title, link, featured_media } = post;

    if(featured_media) {
        console.log(featured_media.localFile.childImageSharp.resolutions);
    }

    return (
        <MaterialContainer>
            <Link to={getPathname(link)}>
                {title}

                {featured_media ? <Img fluid={featured_media.localFile.childImageSharp.fluid} /> : null}
            </Link>
        </MaterialContainer>
    );
}