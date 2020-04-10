import {FunctionComponent} from "react";
import Link from "next/link";

interface TextCardProps {
    title: string;
    subtitle: string;
    subtitleLink: string;
    bodyText: string;
}

const TextCard: FunctionComponent<TextCardProps> = ({title, subtitle, subtitleLink, bodyText}) => (
    <div className={"textcard"}>
        <h3 className="title">{title}</h3>
        <h4 className="subtitle"><Link href={subtitleLink}>{subtitle}</Link></h4>
        <p className="body-text">{bodyText}</p>

    </div>
);