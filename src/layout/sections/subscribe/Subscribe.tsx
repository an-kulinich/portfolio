import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon/Icon";
import {Container} from "../../../components/Container";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <FlexWrapper>
                    <SubscribeIconsBlock>
                        <ConnectText>
                            Let’s Connect
                        </ConnectText>
                        <FlexWrapper justify={"space-between"}>
                            <Icon iconId={"dribble"} width="25" height="25" viewBox="0 0 25 25"/>
                            <Icon iconId={"upwork2"} width="25" height="25" viewBox="0 0 25 25"/>
                            <Icon iconId={"youtube"} width="25" height="25" viewBox="0 0 25 25"/>
                            <Icon iconId={"linkedin"} width="25" height="25" viewBox="0 0 25 25"/>
                            <Icon iconId={"github"} width="25" height="25" viewBox="0 0 25 25"/>
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
                </FlexWrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
    width: 100%;
    min-height: 730px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
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