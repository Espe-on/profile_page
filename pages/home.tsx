import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer/PageContainer";
import React, {FunctionComponent} from "react";

const HomeComponent: FunctionComponent = () => (
    <div>Home Page</div>
);

const Home: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={true} footerAdd={true}>
        <HomeComponent/>
    </PageContainer>
);


export default Home;
