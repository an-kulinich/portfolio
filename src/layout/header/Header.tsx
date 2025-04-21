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
`

const Logo = styled.span`
    
`

const ContactButton = styled.button`

`