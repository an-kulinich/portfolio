import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const Items = [
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
                    <HeaderMenu headerMenuItems={Items}/>
                    <MobileMenu headerMenuItems={Items}/>
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
    background-color: rgba(196, 196, 196, 0.3);

    @media ${Theme.media.tablet} {
        background-color: rgba(196, 196, 196, 0);
    }
`

const Logo = styled.span`
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;

    @media ${Theme.media.tablet} {
        display: none;
    }
`

const ContactButton = styled.button`
    width: 158px;
    max-width: 158px;
    min-height: 50px;
    background-color: ${Theme.colors.accent};
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: ${Theme.colors.font};

    @media ${Theme.media.tablet} {
        display: none;
    }
`