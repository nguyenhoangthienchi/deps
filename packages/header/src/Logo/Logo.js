import React from 'react';

const Logo = (src, text) => {
    return (
        <div>
            <img src={src} alt={text} />
            {text}
        </div>
    )
};

export default Logo;