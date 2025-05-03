import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const headerMenuItems = [
    'Home',
    'About',
    'Services'
]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <Logo>Logo</Logo>
                    <HeaderMenu headerMenuItems={headerMenuItems}/>
                    <ContactButton>Contact me</ContactButton>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    min-height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const Logo = styled.span`
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 0%;

`

const ContactButton = styled.button`
    width: 158px;
    max-width: 158px;
    min-height: 50px;
    background-color: #676CDB;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: white;

`