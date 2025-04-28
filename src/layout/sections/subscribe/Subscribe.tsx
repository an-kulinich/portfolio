import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon/Icon";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <SubscribeIconsBlock>
                <ConnectText>
                    Let’s Connect
                </ConnectText>
                <FlexWrapper>
                    <Icon iconId={"dribble"} />
                    <Icon iconId={"upwork2"} />
                    <Icon iconId={"youtube"} />
                    <Icon iconId={"linkedin"} />
                    <Icon iconId={"github"} />
                </FlexWrapper>
            </SubscribeIconsBlock>
            <SubscribeForm>
                <StyledLabel>Your name:</StyledLabel>
                <StyledInput/>
                <StyledLabel>Your email  address:</StyledLabel>
                <StyledInput/>
                <StyledLabel>Tell about the project:</StyledLabel>
                <StyledInput/>
                <SubscribeButton>Send</SubscribeButton>
            </SubscribeForm>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
    width: 100%;
    display: flex;
    background-color: #9dd3d5;
`

const SubscribeIconsBlock = styled.div`
    width: 50%;
`

const ConnectText = styled.span`
    font-weight: 700;
    font-size: 100px;
    line-height: 120%;
    letter-spacing: 0%;

`

const SubscribeForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const StyledLabel = styled.label`

`

const StyledInput = styled.input`

`

const SubscribeButton = styled.button`

`