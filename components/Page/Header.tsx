﻿﻿import Link from 'next/link';
import React, {FunctionComponent} from "react";


const linkStyle = {
    marginRight: 15
};

const Header : FunctionComponent = () => (
    <div>
        <Link href="/home">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/profile">
            <a style={linkStyle}>Profile</a>
        </Link>
        <Link href="/portfolio">
            <a style={linkStyle}>Portfolio</a>
        </Link>
    </div>
);

export default Header;
