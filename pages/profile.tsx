import {NextPage} from 'next';
import PageContainer from "../components/Page/PageContainer";
import React, {FunctionComponent} from "react";

const ProfileComponent: FunctionComponent = () => (
    <div>Profile Page</div>
);

const Profile: NextPage<FunctionComponent> = (homeComponent) => (
    <PageContainer headerAdd={true} footerAdd={true}>
        <ProfileComponent/>
    </PageContainer>
);


export default Profile;