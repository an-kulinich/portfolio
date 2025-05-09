import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";
import {Theme} from "../../../../styles/Theme";

export const SubscribeForm = () => {
    return (
        <StyledSubscribeForm>
            <StyledLabel>Your name:</StyledLabel>
            <StyledInput/>
            <StyledLabel>Your email address:</StyledLabel>
            <StyledInput/>
            <StyledLabel>Tell about the project:</StyledLabel>
            <StyledInput/>
            <SubscribeButton>
                Send
                <Icon iconId={"subscribeArrow"} width={"25px"} height={"25px"} viewBox={"0 0 25 25"}/>
            </SubscribeButton>
        </StyledSubscribeForm>
    );
};

const StyledSubscribeForm = styled.form`
    width: 500px;
    max-width: 500px;
    min-height: 444px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`

const StyledLabel = styled.label`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: 0%;
`

const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    background-color: unset;
    color: ${Theme.colors.font};
    min-height: 30px;
    font-size: 16px;
`

const SubscribeButton = styled.button`
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: 0%;
    color: ${Theme.colors.accent};
    
    &:hover {
        cursor: pointer;
        transform: translateY(-4px);
    }

`