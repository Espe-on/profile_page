import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer";
import React, {FunctionComponent} from "react";
import PhotoCard from "../components/Displayers/PhotoCard";

const ProfileComponent: FunctionComponent = () => (
    <div>
        <PhotoCard imageUrl={"http://robohash.org/josephProfilePic"}
                   imageAlt={"A picture of Joseph Crawley"}
                   subtitle={"Joseph Crawley- Software Developer"}/>
    </div>
);

const Profile: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={true} footerAdd={true}>
        <ProfileComponent/>
    </PageContainer>
);


export default Profile;