import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {useState, useEffect} from 'react';

const Items = [
    'Home',
    'About',
    'Services'
]

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledHeader scrolled={scrolled}>
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

const StyledHeader = styled.header<{ scrolled: boolean }>`
    width: 100%;
    min-height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: background-color 0.3s ease;
    background-color: ${(props) => (props.scrolled ? 'rgba(34,42,54,0.5)' : 'transparent')};
    
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