import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PostCard } from './PostCard.styled';

import { getPathname } from '../../../utils/getPathname';


export default ({ post }) => {

    const { title, link, featured_media, categories, excerpt } = post;

    return (
        <PostCard>
            {featured_media
                ?   <Link to={getPathname(link)}>
                        <Img
                        className="thumbnail"
                        fluid={featured_media.localFile.childImageSharp.fluid}
                        title={featured_media.title ? featured_media.title : title}
                        alt={featured_media.alt_text ? featured_media.alt_text : title} />
                    </Link>

                :   null
            }

            <div className="post-card-body">
                <div className="category-wrapper">
                    {categories
                        ? categories.map(item =>
                            <Link to={getPathname(item.link)}>
                                <span className="category-item" key={item.id}>{item.name}</span>
                            </Link>
                        )

                        : null
                    }
                </div>

                <Link to={getPathname(link)}>
                    <h2 className="title">{title}</h2>
                </Link>

                {excerpt
                    ? <div className="excerpt" dangerouslySetInnerHTML={{__html: excerpt}}></div>
                    : null
                }
            </div>
        </PostCard>
    );
}