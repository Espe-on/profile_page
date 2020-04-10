import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer";
import React, {FunctionComponent} from "react";
import Link from "next/link";

const linkStyle = {
    marginRight: 15
};


const HomeSplashComponent: FunctionComponent = () => (
    <div>
        <Link href="/home">
            <a style={linkStyle}>Enter Site</a>
        </Link>
    </div>
);

const HomeSplash: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={false} footerAdd={false}>
        <HomeSplashComponent/>
    </PageContainer>
);


export default HomeSplash;
