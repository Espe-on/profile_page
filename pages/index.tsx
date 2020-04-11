import {NextPage} from 'next';
import Link from "next/link";
import React, {FunctionComponent} from "react";
import PageContainer from "../components/Page/PageContainer/PageContainer";

const HomeSplashComponent: FunctionComponent = () => (
    <div>
        <Link href="/home">
            <a>Enter Site</a>
        </Link>
    </div>
);

const HomeSplash: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={false} footerAdd={false}>
        <HomeSplashComponent/>
    </PageContainer>
);


export default HomeSplash;
