import React from 'react';

const Questions = ({ ActiveItem }) => {

    console.log( ActiveItem)
        return(
            <div className="quest-public">
            question example<p>{ActiveItem}</p>
            </div>
        )
}

export default Questions