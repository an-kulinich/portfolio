import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/Icon/Icon";

export const SubscribeIconsBlock = () => {
    return (
        <StyledSubscribeIconsBlock>
            <ConnectText>
                Let’s Connect
            </ConnectText>
            <FlexWrapper justify={"space-between"} width="325px" maxWidth={"325px"}>
                <Icon iconId={"dribble"} width="25" height="25" viewBox="0 0 25 25"/>
                <Icon iconId={"upwork2"} width="25" height="25" viewBox="0 0 25 25"/>
                <Icon iconId={"youtube"} width="25" height="25" viewBox="0 0 25 25"/>
                <Icon iconId={"linkedin"} width="25" height="25" viewBox="0 0 25 25"/>
                <Icon iconId={"github"} width="25" height="25" viewBox="0 0 25 25"/>
            </FlexWrapper>
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

