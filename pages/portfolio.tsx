import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer";
import React, {FunctionComponent} from "react";

const PortfolioComponent: FunctionComponent = () => (
    <div>Portfolio Page</div>
);

const Portfolio: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={true} footerAdd={true}>
        <PortfolioComponent/>
    </PageContainer>
);


export default Portfolio;