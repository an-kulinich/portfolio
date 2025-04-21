import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo>Logo</Logo>
            <Menu>
                <MenuItem>
                    <MenuLink>
                        Home
                    </MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink>
                        About
                    </MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink>
                        Services
                    </MenuLink>
                </MenuItem>
            </Menu>
            <ContactButton>Contact me</ContactButton>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`

`

const Logo = styled.span`
    
`

const Menu = styled.ul`

`

const MenuItem = styled.li`
    
`

const MenuLink = styled.a`

`

const ContactButton = styled.button`
    
`