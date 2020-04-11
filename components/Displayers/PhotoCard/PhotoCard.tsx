﻿import {FunctionComponent} from 'react';
import './PhotoCard.scss';

interface PhotocardProps {
    subtitle: string;
    imageUrl: string;
    imageAlt?: string;
}

const PhotoCard: FunctionComponent<PhotocardProps> = ({subtitle,imageUrl, imageAlt}) => (
    <div className="photocard">
        <img className="photocard-photo" src={imageUrl} alt={imageAlt}/>
        <h3>{subtitle}</h3>
    </div>
);

export default PhotoCard;