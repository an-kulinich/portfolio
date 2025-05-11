import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";
import {font} from "../../../../styles/Common";

export const SubscribeIconsBlock = () => {
    return (
        <StyledSubscribeIconsBlock>
            <ConnectText>
                Let’s Connect
            </ConnectText>
            <IconWrapper>
                <SocialLink href={"#"}>
                    <Icon iconId={"dribble"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink href={"#"}>
                    <Icon iconId={"upwork2"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink href={"#"}>
                    <Icon iconId={"youtube"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink href={"#"}>
                    <Icon iconId={"linkedin"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink href={"#"}>
                    <Icon iconId={"github"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
            </IconWrapper>
        </StyledSubscribeIconsBlock>
    );
};

const StyledSubscribeIconsBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 40px;
`

const ConnectText = styled.span`
    ${font({weight: 700, lineHeight: 120, Fmax: 100, Fmin: 50})};
`

const IconWrapper = styled.div`
    width: 100%;
    max-width: 325px;
    display: flex;
    justify-content: space-between;
    
`

const SocialLink = styled.a`
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

