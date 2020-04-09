import {FunctionComponent} from "react";

interface EmojiProps {
    symbol: string;
    label: string
}

const EmojiDisplayer: FunctionComponent<EmojiProps> = ({symbol, label}) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);

export default EmojiDisplayer;
