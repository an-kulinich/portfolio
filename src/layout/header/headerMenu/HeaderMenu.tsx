import styled from "styled-components";

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
    width: 50%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
`

const MenuItem = styled.li`

`

const MenuLink = styled.a`

`