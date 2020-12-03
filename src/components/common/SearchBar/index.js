import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import SearchBarStyle from './SearchBar.styled';

import SearchIcon from '../../../images/search.svg';

const SearchBar = ({ onChangeHook }) => {

    const [term, setTerm] = useState(null);

    const handleChange = (event) => {
        setTerm(event.target.value);
        if (onChangeHook) {
            onChangeHook(event.target.value);
        }
    }

    const handleKey = (event) => {
        if (event.key === 'Enter' && term) {
            navigate(`/search?s=${term}`);
        }
    }

    return (
        <SearchBarStyle>
            <label htmlFor="term">test</label>
            <input
                id="term"
                placeholder="Search for keywords like: 'photo', 'selfie', 'post'"
                onChange={(event) => handleChange(event)}
                onKeyDown={(event) => handleKey(event)}
            />

            <Link to={`${term ? `/search?s=${term}` : '/'}`}>
                Search
                <SearchIcon />
            </Link>
        </SearchBarStyle>
    );
}

export default SearchBar;