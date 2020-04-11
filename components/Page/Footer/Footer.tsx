﻿﻿import React, {FunctionComponent} from 'react';
import EmojiDisplayer from '../../Displayers/EmojiDisplayer/EmojiDisplayer';
import './Footer.scss';


const Header : FunctionComponent = () => (
    <div className="footer">
        <p className="footer-text">Made by Joseph Crawley (aka Espe-ON <EmojiDisplayer symbol="🐱" label="cat"/>)</p>
    </div>
);

export default Header;
