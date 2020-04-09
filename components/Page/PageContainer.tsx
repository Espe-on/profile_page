﻿﻿import React, {FunctionComponent} from "react";
import Header from './Header'
import Footer from './Footer'


type PageContainerProps = {
    headerAdd?: boolean;
    footerAdd?: boolean;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({headerAdd, footerAdd, children}) => {
    const headerOnly: JSX.Element =
        <div className="page">
                <Header/>
                <main className={`main header-only`}>
                    {children}
                </main>
        </div>;

    const footerOnly: JSX.Element =
        <div className="page">
                <main className={`main footer-only`}>
                    {children}
                </main>
                <Footer/>
        </div>
    ;

    const headerAndFooter: JSX.Element =
        <div className="page">
                <Header/>
                {children}
                <Footer/>
            
        </div>
    ;

    const cleanPage: JSX.Element =
        <div className="page">
                <main className={`main main-only`}>
                    {children}
                </main>
        </div>
    ;


    if (headerAdd && footerAdd) {
        return headerAndFooter
    } else if (headerAdd) {
        return headerOnly
    } else if (footerAdd) {
        return footerOnly
    } else {
        return cleanPage
    }

};

export default PageContainer;