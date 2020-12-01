import React, { useState, useEffect } from 'react';
import * as JsSearch from 'js-search';

import MasterLayout from '../layouts/MasterLayout';

import SearchBar from '../components/common/SearchBar';
import PostGrid from '../components/common/PostGrid';

export default ({ pageContext }) => {

    /* state */
    const [term, setTerm] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [searcher, setSearcher] = useState(null);

    const onChangeHook = (newTerm) => {
        setTerm(newTerm);
    }

    useEffect(() => {
        /* URL param */
        const params = new URLSearchParams(document.location.search.substring(1));
        const queryString = params.get('s');
        setTerm(queryString);

        /* making post array */
        let postArray = [];

        pageContext.postData.allPosts.forEach(element => {
            postArray.push({
                ...element.node
            })
        });

        /* setting searcher */
        var search = new JsSearch.Search('id');
        search.addIndex('title')
        search.addIndex('content');

        search.addDocuments(postArray);
        setSearcher(search);

        /* initial search */
        setSearchResults(search.search(term));
    }, []);

    useEffect(() => {
        if (searcher) {
            setSearchResults(searcher.search(term));
        }
    }, [term, searcher]);

    return (
        <MasterLayout>
            <section>
                <SearchBar onChangeHook={onChangeHook} />
                <PostGrid
                    title={
                        term
                            ? `${searchResults.length} results for '${term}'`
                            : 'Search results'
                    }

                    itemArray={searchResults} />
            </section>
        </MasterLayout>
    );
}