import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";

export const MobileMenu = (props: { headerMenuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <Popup isOpen={false}>
                <ul>
                    {props.headerMenuItems.map((item, index) => {
                        return (
                            <MenuItem key={index}>
                                <MenuLink>
                                    {item}
                                </MenuLink>
                            </MenuItem>
                        )
                    })}
                </ul>
                <ContactButton>Contact me</ContactButton>
            </Popup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`

    position: fixed;
    width: 60px;
    height: 60px;
    top: 25px;
    right: 25px;
    z-index: 9999999;

    span {
        display: block;
        width: 34px;
        height: 4px;
        background-color: ${Theme.colors.font};
        position: absolute;
        top: 15px;
        right: 15px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 34px;
            height: 4px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0px);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 34px;
            height: 4px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0px);
            `}
        }
    }
`

const Popup = styled.div<{ isOpen: boolean }>`

    position: fixed;
    background-color: rgba(45, 53, 64, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    `}
    
    ul {
        width: 350px;
        max-width: 350px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
`

const MenuItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    
    @media ${Theme.media.tablet} {
       padding: 20px 0px;
    }
`

const MenuLink = styled.a`

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
`