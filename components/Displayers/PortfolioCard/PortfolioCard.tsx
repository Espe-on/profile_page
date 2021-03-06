﻿﻿import {FunctionComponent} from 'react';
import './PortfolioCard.scss';

interface PortfolioCardProps {
    title: string
    subtitle?: string;
    bodyText: string;
    imageUrl: string;
    imageAlt?: string;
}

const PortfolioCard: FunctionComponent<PortfolioCardProps> =
    ({title, subtitle, bodyText, imageUrl, imageAlt}) => (
        <div className="portfolio-card">
            <div className="text-container">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
                <p className="body-text">{bodyText}</p>
            </div>
            <img src={imageUrl} alt={imageAlt}/>
        </div>
    );

export default PortfolioCard;