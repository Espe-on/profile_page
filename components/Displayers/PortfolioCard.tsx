import {FunctionComponent} from "react";

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
                <h3 className="title">{title}</h3>
                <h4 className="subtitle">{subtitle}</h4>
                <p className="body-text">{bodyText}</p>
            </div>
            <img src={imageUrl} alt={imageAlt}/>
        </div>
    );

export default PortfolioCard;