import React from 'react';

import './header.scss';

const Header: React.FC = (): JSX.Element => {
    return (
        <div className='headerCnt'>
            <h3 className='headerTxt'>
                Articles published about Node Js in HackerNews
            </h3>
        </div>
    )
};

export default Header;