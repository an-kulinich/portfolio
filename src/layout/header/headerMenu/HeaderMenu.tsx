import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { headerMenuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            {props.headerMenuItems.map((item, index) => {
                return (
                    <MenuItem key={index}>
                        <MenuLink>
                            {item}
                        </MenuLink>
                    </MenuItem>
                )
            })}
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.ul`
    width: 350px;
    max-width: 350px;
    display: flex;
    justify-content: space-between;

    @media ${Theme.media.tablet} {
        display: none;
    }
`

const MenuItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
`

const MenuLink = styled.a`

`