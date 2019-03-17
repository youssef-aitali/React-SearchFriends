import React from 'react';
import './Friend.css';

const Friend = ({ name, email, id }) => {
    return (
        <div className="friend_Contact">
            <img alt='contacts' src={`http://flathash.com/${id}?150x150`} />
            <div>
                <h2>
                    {name}
                </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Friend;