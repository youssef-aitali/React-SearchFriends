import React from 'react';
import './SearchInput.css';

const SearchInput = ({ searchtext, searchChange }) => {
    return (
        <div className="search_box">
            <input type="text"
                placeholder="Search friends..."
                onChange={searchChange} />
        </div>
    );
}

export default SearchInput;