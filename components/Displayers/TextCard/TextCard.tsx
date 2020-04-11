﻿import {FunctionComponent} from 'react';
import Link from 'next/link';
import './TextCard.scss'

interface TextCardProps {
    title: string;
    subtitle: string;
    subtitleLink: string;
    bodyText: string;
}

const TextCard: FunctionComponent<TextCardProps> = ({title, subtitle, subtitleLink, bodyText}) => (
    <div className={"textcard"}>
        <h2 className="title">{title}</h2>
        <h3 className="subtitle"><Link href={subtitleLink}>{subtitle}</Link></h3>
        <p className="body-text">{bodyText}</p>
    </div>
);
export default TextCard;
