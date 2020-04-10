import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer";
import React, {FunctionComponent} from "react";
import PortfolioCard from "../components/Displayers/PortfolioCard";

const PortfolioComponent: FunctionComponent = () => (
    <div><PortfolioCard title={"TestCard"} subtitle={"Whoooo boy a test"} bodyText={"Here is some text for testing"} imageUrl={"https://robohash.org/profiletest"}/></div>
);

const Portfolio: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={true} footerAdd={true}>
        <PortfolioComponent/>
    </PageContainer>
);


export default Portfolio;