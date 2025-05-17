import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";
import {Theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

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
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 45px;
`

const StyledLabel = styled.label`
    ${font({weight: 500, lineHeight: 120, Fmax: 30, Fmin: 22})};
`

const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    background-color: unset;
    color: ${Theme.colors.font};
    min-height: 30px;
    font-size: 16px;
    
    &:focus-visible {
        outline: none;
        border-bottom: 1px solid ${Theme.colors.accent};
    }
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