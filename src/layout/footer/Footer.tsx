import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterLink>Created by <a href={"#"}>Zarror</a> | All Reserved!</FooterLink>
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
    background-color: ${Theme.colors.secondaryBg};
`

const FooterLink = styled.a`
    ${font({weight: 500, color: '#a6a6a6', lineHeight: 180, Fmax: 20, Fmin: 16})};
    letter-spacing: 0.3px;
    a {
        font-weight: 700;
        color: ${Theme.colors.font};
    }
`