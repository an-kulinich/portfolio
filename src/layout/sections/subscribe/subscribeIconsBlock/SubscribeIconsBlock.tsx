import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/Icon/Icon";

export const SubscribeIconsBlock = () => {
    return (
        <StyledSubscribeIconsBlock>
            <ConnectText>
                Let’s Connect
            </ConnectText>
            <IconWrapper>
                <SocialLink>
                    <Icon iconId={"dribble"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink>
                    <Icon iconId={"upwork2"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink>
                    <Icon iconId={"youtube"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink>
                    <Icon iconId={"linkedin"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
                <SocialLink>
                    <Icon iconId={"github"} width="25" height="25" viewBox="0 0 25 25"/>
                </SocialLink>
            </IconWrapper>
        </StyledSubscribeIconsBlock>
    );
};

const StyledSubscribeIconsBlock = styled.div`
    width: 438px;
    max-width: 438px;
    min-height: 240px;
`

const ConnectText = styled.span`
    font-weight: 700;
    font-size: 100px;
    line-height: 120%;
    letter-spacing: 0%;
`

const IconWrapper = styled.div`
    width: 325px;
    display: flex;
    justify-content: space-between;
    
`

const SocialLink = styled.a`
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

