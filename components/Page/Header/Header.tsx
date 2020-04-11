﻿﻿﻿import Link from 'next/link';
import React, {FunctionComponent} from "react";
import './Header.scss';

const Header : FunctionComponent = () => (
    <div className="header">
        <Link href="/home">
            <a>Home </a>
        </Link>
        <Link href="/profile">
            <a>Profile </a>
        </Link>
        <Link href="/portfolio">
            <a>Portfolio </a>
        </Link>
    </div>
);

export default Header;
