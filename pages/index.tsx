import {NextPage} from 'next';
import Link from "next/link";
import React, {FunctionComponent} from "react";
import PageContainer from "../components/Page/PageContainer/PageContainer";
import '../pages_styles/index.scss'

const HomeSplashComponent: FunctionComponent = () => (
    <div className="home-splash">
        <Link href="/home">Enter Site</Link>
    </div>
);

const HomeSplash: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={false} footerAdd={false}>
        <HomeSplashComponent/>
    </PageContainer>
);


export default HomeSplash;
