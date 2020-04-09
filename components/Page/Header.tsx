﻿﻿import Link from 'next/link';
import React, {FunctionComponent} from "react";


const linkStyle = {
    marginRight: 15
};

const Header : FunctionComponent = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
    </div>
);

export default Header;
