import React from "react";
import Flex from "../../TemplateAssets/common/Flex";
import UserRegisterForm from "./UserRegisterForm";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import RegisterAuthSplitLayout from "../../TemplateAssets/SplitLayout/RegisterAuthSplitLayout";

function SignUpPage() {

    return (
        <>
            <NavbarStandard />
            <RegisterAuthSplitLayout>
                <Flex alignItems="center" justifyContent="between">
                    <h3 className='mb-3'>Start Living Your Work Dream</h3>
                </Flex>
                <p style={{ fontSize: '12px' }}>What do you want to do?(You Can dit this Later)</p>
                <UserRegisterForm layout="split" hasLabel />
            </RegisterAuthSplitLayout>
            {/* <FooterStandard /> */}
        </>
    )
}
export default SignUpPage;
