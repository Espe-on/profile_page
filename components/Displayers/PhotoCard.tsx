import {FunctionComponent} from "react";

interface PhotocardProps {
    subtitle: string;
    imageUrl: string;
    imageAlt?: string;
}

const PhotoCard: FunctionComponent<PhotocardProps> = ({subtitle,imageUrl, imageAlt}) => (
    <div className="photocard">
        <img className="photocard-photo" src={imageUrl} alt={imageAlt}/>
        <h4>{subtitle}</h4>
    </div>
);

export default PhotoCard;