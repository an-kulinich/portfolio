import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterLink>Created by Zarror | All Reserved!</FooterLink>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    width: 100%;
    background-color: #656565;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`

const FooterLink = styled.a`

`