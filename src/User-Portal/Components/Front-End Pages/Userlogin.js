import React from 'react';
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import AuthSplitLayout from '../../TemplateAssets/SplitLayout/AuthSplitLayout';
import Flex from '../../TemplateAssets/common/Flex';
import LoginForm from '../../TemplateAssets/authentication/LoginForm'
import FooterStandard from '../Footer/FooterStandard';
const UserLogin = () => {
    return (
        <>
            {/* <NavbarStandard /> */}
            <AuthSplitLayout>
                <Flex alignItems="center" justifyContent="between">
                    <h3 className=' mb-3'>Login as</h3>
                </Flex>
                <LoginForm layout="split" hasLabel />
            </AuthSplitLayout>
            {/* <FooterStandard/> */}
        </>
    );
};

export default UserLogin;
