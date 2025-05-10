import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SubscribeForm} from "./subscribeForm/SubscribeForm";
import {SubscribeIconsBlock} from "./subscribeIconsBlock/SubscribeIconsBlock";
import {Theme} from "../../../styles/Theme";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <FlexWrapper justify="space-between">
                    <SubscribeIconsBlock/>
                    <SubscribeForm/>
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
    background-color: ${Theme.colors.secondaryBg};
`



