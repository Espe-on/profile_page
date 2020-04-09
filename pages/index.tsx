import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer";
import React, {FunctionComponent} from "react";

const HomeComponent: FunctionComponent = () => (
    <div>Hello World</div>
);

const Home: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={true} footerAdd={true}> 
        <HomeComponent/> 
    </PageContainer>
);


export default Home;
