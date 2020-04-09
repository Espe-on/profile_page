﻿import {FunctionComponent} from "react";
import EmojiDisplayer from "../Displayers/EmojiDisplayer";



const Header : FunctionComponent = () => (
    <div>
        Made by Joseph Crawley <EmojiDisplayer symbol="🐱" label="cat"/>
    </div>
);

export default Header;
